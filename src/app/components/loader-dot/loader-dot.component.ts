import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loader-dot',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loader-dot.component.html',
    styleUrl: './loader-dot.component.scss'
})
export class LoaderDotComponent implements OnChanges {
    /** number of dots */
    @Input() count = 3;
    /** diameter in px */
    @Input() size = 10;
    /** gap between dots in px */
    @Input() gap = 8;
    /** CSS color or hex */
    @Input() color = 'currentColor';
    /** animation duration per dot (ms) */
    @Input() durationMs = 700;
    /** stagger delay between dots (ms) */
    @Input() delayMs = 120;
    /** screen reader text */
    @Input() label = 'Loading…';

    dots: number[] = Array.from({ length: this.count });

    ngOnChanges(_: SimpleChanges) {
        this.dots = Array.from({ length: Math.max(1, this.count) });
    }
}