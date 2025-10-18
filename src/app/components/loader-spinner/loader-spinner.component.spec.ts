import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSpinnerComponent } from './loader-spinner.component';

describe('LoaderSpinnerComponent', () => {
    let component: LoaderSpinnerComponent;
    let fixture: ComponentFixture<LoaderSpinnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoaderSpinnerComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoaderSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render a spinner with role=status and default aria-label', () => {
        const el = fixture.nativeElement.querySelector('.spinner') as HTMLElement;
        expect(el).toBeTruthy();
        expect(el.getAttribute('role')).toBe('status');
        expect(el.getAttribute('aria-label')).toBe('Loading…');
    });

    it('should apply style variables from inputs', () => {
        component.size = 60;
        component.color = '#00ff00';
        component.label = 'Please wait';
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.spinner') as HTMLElement;
    // CSS variable values may include units (e.g. '60px'), parse to integer for robust assertion
    const sizeValue = el.style.getPropertyValue('--size') || '';
    expect(parseInt(sizeValue, 10)).toBe(60);
    expect(el.style.getPropertyValue('--color')).toBe('#00ff00');
        expect(el.getAttribute('aria-label')).toBe('Please wait');
    });

    it('should reflect input defaults', () => {
        expect(component.size).toBe(40);
        expect(component.color).toBe('currentColor');
        expect(component.label).toBe('Loading…');
    });
});
