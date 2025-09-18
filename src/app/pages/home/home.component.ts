import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})

export class HomeComponent {
    header: string = "Hi, I'm";
    name: string = "Arianna";
    mainTitle: string = "Featured Sections";
}