import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})

export class CozyCornerComponent {
    header: string = 'Welcome to the Cozy Corner!';

    ideas: string[] = [
        "A journal or notes area",
        "Moodboards or vibes",
        "Pics or drawings if you want",
        "Maybe like “today I liked…” entries"
    ]
}
