import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})

export class HomeComponent {
    header = 'Welcome!';

    personality = [
        "MBTI: ISFJ-T",
        "6w5; sp",
        "Sun: Taurus",
        "Moon: Leo",
        "Rising: Virgo"
    ]
}
