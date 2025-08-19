import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';
import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
    let component: FavoritesComponent;
    let fixture: ComponentFixture<FavoritesComponent>;
    let renderer: Renderer2;

    // Mock dialog element
    let dialogMock: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FavoritesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;
        renderer = fixture.componentRef.injector.get(Renderer2);

        // Mock dialog element and ViewChild
        dialogMock = {
            classList: {
                contains: jasmine.createSpy('contains').and.returnValue(false),
                add: jasmine.createSpy('add'),
                remove: jasmine.createSpy('remove')
            },
            showModal: jasmine.createSpy('showModal'),
            close: jasmine.createSpy('close')
        };
        component.favoritesDialog = { nativeElement: dialogMock } as any;
        spyOn(renderer, 'addClass').and.callThrough();
        spyOn(renderer, 'removeClass').and.callThrough();
    });

    it('should open dialog with correct title and items and add correct class', fakeAsync(() => {
        component.openDialog('Colors', ['Red', 'Blue']);
        expect(component.dialogTitle).toBe('My Favorite Colors!');
        expect(component.dialogItems).toEqual(['Red', 'Blue']);
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'blue');
        expect(dialogMock.showModal).toHaveBeenCalled();
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'opening');
        tick(300);
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'opening');
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'visible');
    }));

    it('should add correct color class for Animals', () => {
        component.openDialog('Animals', ['Cat']);
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'pink');
    });

    it('should add correct color class for Foods', () => {
        component.openDialog('Foods', ['Pizza']);
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'yellow');
    });

    it('should add correct color class for Artists', () => {
        component.openDialog('Artists', ['Artist']);
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'green');
    });

    it('should add correct color class for Snacks', () => {
        component.openDialog('Snacks', ['Chips']);
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'purple');
    });

    it('should not add any color class for unknown title', () => {
        component.openDialog('Unknown', ['Item']);
        expect(renderer.addClass).not.toHaveBeenCalledWith(dialogMock, 'blue');
        expect(renderer.addClass).not.toHaveBeenCalledWith(dialogMock, 'pink');
        expect(renderer.addClass).not.toHaveBeenCalledWith(dialogMock, 'yellow');
        expect(renderer.addClass).not.toHaveBeenCalledWith(dialogMock, 'green');
        expect(renderer.addClass).not.toHaveBeenCalledWith(dialogMock, 'purple');
    });

    it('should close dialog with animation', fakeAsync(() => {
        component.closeWithAnimation();
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'visible');
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'closing');
        tick(300);
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'closing');
        expect(dialogMock.close).toHaveBeenCalled();
    }));

    it('should handle onDialogClose and remove all classes', fakeAsync(() => {
        dialogMock.classList.contains.and.returnValue(false);
        component.onDialogClose();
        expect(component.dialogTitle).toBe('');
        expect(component.dialogItems).toEqual([]);
        expect(renderer.addClass).toHaveBeenCalledWith(dialogMock, 'closing');
        tick(300);
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'closing');
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'visible');
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'blue');
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'pink');
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'yellow');
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'purple');
        expect(renderer.removeClass).toHaveBeenCalledWith(dialogMock, 'green');
    }));

    it('should not add closing class if already present in onDialogClose', () => {
        dialogMock.classList.contains.and.returnValue(true);
        component.onDialogClose();
        expect(renderer.addClass).not.toHaveBeenCalledWith(dialogMock, 'closing');
    });
});
