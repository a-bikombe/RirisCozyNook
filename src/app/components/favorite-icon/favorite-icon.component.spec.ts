import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteIconComponent } from './favorite-icon.component';

describe('FavoriteIconComponent', () => {
    let component: FavoriteIconComponent;
    let fixture: ComponentFixture<FavoriteIconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FavoriteIconComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FavoriteIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render default svg attributes', () => {
        const el: HTMLElement = fixture.nativeElement;
        const svg = el.querySelector('svg') as SVGElement;
        const path = el.querySelector('path') as SVGPathElement;

        expect(svg.getAttribute('width')).toBe('20');
        expect(svg.getAttribute('height')).toBe('20');
        expect(path.getAttribute('fill')).toBe('none');
        expect(path.getAttribute('stroke')).toBe('currentColor');
        expect(path.getAttribute('stroke-width')).toBe('2');
    });

    it('should render filled icon when filled=true', () => {
        component.filled = true;
        component.color = '#ff0000';
        fixture.detectChanges();

        const el: HTMLElement = fixture.nativeElement;
        const path = el.querySelector('path') as SVGPathElement;
        expect(path.getAttribute('fill')).toBe('#ff0000');
        expect(path.getAttribute('stroke')).toBe('none');
    });

    it('should apply size and strokeWidth inputs', () => {
        component.size = 32;
        component.strokeWidth = 4;
        fixture.detectChanges();

        const el: HTMLElement = fixture.nativeElement;
        const svg = el.querySelector('svg') as SVGElement;
        const path = el.querySelector('path') as SVGPathElement;

        expect(svg.getAttribute('width')).toBe('32');
        expect(svg.getAttribute('height')).toBe('32');
        expect(path.getAttribute('stroke-width')).toBe('4');
    });
});
