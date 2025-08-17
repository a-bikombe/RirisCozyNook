import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
    let fixture: ComponentFixture<FavoritesComponent>;
    let component: FavoritesComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FavoritesComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should set dialogTitle and dialogItems when openDialog is called', () => {
        // Mock dialog element
        const dialogMock = {
            showModal: jasmine.createSpy('showModal'),
            classList: {
                contains: jasmine.createSpy('contains').and.returnValue(false),
                remove: jasmine.createSpy('remove')
            }
        } as any;
        component.favoritesDialog = { nativeElement: dialogMock } as any;

        spyOn(component['renderer'], 'addClass');
        spyOn(component['renderer'], 'removeClass');

        component.openDialog('Colors', ['Red', 'Blue']);
        expect(component.dialogTitle).toBe('My Favorite Colors!');
        expect(component.dialogItems).toEqual(['Red', 'Blue']);
        expect(dialogMock.showModal).toHaveBeenCalled();
        expect(component['renderer'].addClass).toHaveBeenCalledWith(dialogMock, 'blue');
    });

    it('should add and remove classes on closeWithAnimation', (done) => {
        const dialogMock = {
            close: jasmine.createSpy('close'),
            classList: {
                contains: jasmine.createSpy('contains').and.returnValue(false)
            }
        } as any;
        component.favoritesDialog = { nativeElement: dialogMock } as any;

        spyOn(component['renderer'], 'addClass');
        spyOn(component['renderer'], 'removeClass');

        component.closeWithAnimation();

        expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'visible');
        expect(component['renderer'].addClass).toHaveBeenCalledWith(dialogMock, 'closing');

        setTimeout(() => {
            expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'closing');
            expect(dialogMock.close).toHaveBeenCalled();
            done();
        }, 350);
    });

    it('should reset dialogTitle and dialogItems on onDialogClose', (done) => {
        const dialogMock = {
            classList: {
                contains: jasmine.createSpy('contains').and.returnValue(false)
            }
        } as any;
        component.favoritesDialog = { nativeElement: dialogMock } as any;

        spyOn(component['renderer'], 'addClass');
        spyOn(component['renderer'], 'removeClass');

        component.dialogTitle = 'Test';
        component.dialogItems = ['A', 'B'];

        component.onDialogClose();

        expect(component.dialogTitle).toBe('');
        expect(component.dialogItems).toEqual([]);
        expect(component['renderer'].addClass).toHaveBeenCalledWith(dialogMock, 'closing');
        expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'visible');
        expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'blue');
        expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'pink');
        expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'yellow');
        expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'purple');
        expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'green');

        setTimeout(() => {
            expect(component['renderer'].removeClass).toHaveBeenCalledWith(dialogMock, 'closing');
            done();
        }, 350);
    });

    it('should add correct color class based on title in openDialog', () => {
        const dialogMock = {
            showModal: jasmine.createSpy('showModal'),
            classList: {
                contains: jasmine.createSpy('contains').and.returnValue(false)
            }
        } as any;
        component.favoritesDialog = { nativeElement: dialogMock } as any;

        spyOn(component['renderer'], 'addClass');
        spyOn(component['renderer'], 'removeClass');

        component.openDialog('Snacks', ['Chips']);
        expect(component['renderer'].addClass).toHaveBeenCalledWith(dialogMock, 'purple');
    });
});
