import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'cozy-corner',
    imports: [CommonModule, MatListModule],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})

export class CozyCornerComponent {
    header = 'Cozy Corner';

    ideas = [
        "A journal or notes area",
        "Moodboards or vibes",
        "Pics or drawings if you want",
        "Maybe like “today I liked…” entries"
    ]
}
