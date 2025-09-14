import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule, RouterLink, LoaderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})

export class HomeComponent {
    header: string = "Hi, I'm";
    name: string = "Arianna";
    mainTitle: string = "Featured Sections";
    loading: boolean = false;

    constructor() {
        this.loading = true;
    }

    ngOnInit() {
        setTimeout(() => {
            this.loading = false;
        }, 2000); // Simulate a 2-second loading time
    }
}