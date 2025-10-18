import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDotComponent } from './loader-dot.component';

describe('LoaderDotComponent', () => {
    let component: LoaderDotComponent;
    let fixture: ComponentFixture<LoaderDotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoaderDotComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoaderDotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render default number of dots', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const dots = compiled.querySelectorAll('.dot');
        expect(dots.length).toBe(component.count);
    });

    it('ngOnChanges should update dots when count changes', () => {
        component.count = 5;
        component.ngOnChanges({} as any);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const dots = compiled.querySelectorAll('.dot');
        expect(dots.length).toBe(5);
    });

    it('should expose role=status and aria-label, and CSS variables reflect inputs', () => {
        component.label = 'Please wait';
        component.size = 12;
        component.gap = 6;
        component.color = '#ff0000';
        component.durationMs = 500;
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.dots') as HTMLElement;
        expect(el.getAttribute('role')).toBe('status');
        expect(el.getAttribute('aria-label')).toBe('Please wait');
        // style properties are set as inline CSS variables; check computed style fallback via style attribute
        expect(el.style.getPropertyValue('--color')).toBe('#ff0000');
    });
});
