import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { CrewComponent } from './crew/crew.component';
import { Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('AboutMeComponent', () => {
    let component: AboutMeComponent;
    let fixture: ComponentFixture<AboutMeComponent>;
    let renderer: Renderer2;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutMeComponent, CrewComponent, CommonModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        renderer = fixture.componentRef.injector.get(Renderer2);

        // Mock aboutMeDialog
        component.aboutMeDialog = {
            nativeElement: document.createElement('dialog')
        } as any;

        fixture.detectChanges();
    });

    it('should initialize properties', () => {
        expect(component.hasError).toBeFalse();
        expect(component.isLoading).toBeTrue();
        expect(Array.isArray(component.funFacts)).toBeTrue();
        expect(Array.isArray(component.skillsHobbies)).toBeTrue();
        expect(Array.isArray(component.personality)).toBeTrue();
    });

    it('should open dialog with correct title and items', fakeAsync(() => {
        spyOn(component.aboutMeDialog.nativeElement, 'showModal');
        spyOn(renderer, 'addClass');
        spyOn(renderer, 'removeClass');

        const title = 'Skills';
        const items = ['Angular', 'TypeScript'];
        component.openDialog(title, items);

        expect(component.dialogTitle).toBe('My Skills!');
        expect(component.dialogItems).toEqual(items);
        expect(component.aboutMeDialog.nativeElement.showModal).toHaveBeenCalled();
        expect(renderer.addClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'opening');
        tick(300);
        expect(renderer.removeClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'opening');
        expect(renderer.addClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'visible');
    }));

    it('should close dialog with animation', fakeAsync(() => {
        spyOn(component.aboutMeDialog.nativeElement, 'close');
        spyOn(renderer, 'addClass');
        spyOn(renderer, 'removeClass');

        component.closeWithAnimation();

        expect(renderer.removeClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'visible');
        expect(renderer.addClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'closing');
        tick(300);
        expect(renderer.removeClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'closing');
        expect(component.aboutMeDialog.nativeElement.close).toHaveBeenCalled();
    }));

    it('should reset dialogTitle and dialogItems on dialog close', fakeAsync(() => {
        spyOn(renderer, 'addClass');
        spyOn(renderer, 'removeClass');

        component.dialogTitle = 'Test';
        component.dialogItems = ['item1'];
        component.onDialogClose();

        expect(component.dialogTitle).toBe('');
        expect(component.dialogItems).toEqual([]);
        expect(renderer.addClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'closing');
        tick(300);
        expect(renderer.removeClass).toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'closing');
    }));

    it('should not add closing class if already present on dialog close', fakeAsync(() => {
        spyOn(renderer, 'addClass');
        spyOn(renderer, 'removeClass');
        component.aboutMeDialog.nativeElement.classList.add('closing');

        component.onDialogClose();

        expect(renderer.addClass).not.toHaveBeenCalledWith(component.aboutMeDialog.nativeElement, 'closing');
    }));
});
