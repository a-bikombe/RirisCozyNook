import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'loader-spinner-component',
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