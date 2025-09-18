import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loader-spinner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loader-spinner.component.html',
    styleUrl: './loader-spinner.component.scss',
})
export class LoaderSpinnerComponent {
    /** diameter in px */
    @Input() size = 40;
    /** spinner color */
    @Input() color = 'currentColor';
    /** screen reader text */
    @Input() label = 'Loading…';
}

// <!-- default -->
// <app-loader - spinner > </app-loader>

// <!--smaller -->
// <app-loader-spinner [size]="24"></app-loader-spinner>

// <!--larger + custom color-->
// <app-loader-spinner [size]="80" color="tomato"></app-loader-spinner>