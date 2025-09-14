import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationItem } from './interfaces/navigation-item.interface';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, DatePipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title: string = "Riri's Cozy Nook";
    footerText: string = "Copyright " + this.title + " —";
    currentDate: Date = new Date();

    navigationItems: NavigationItem[] = [
        { path: "/about-me", label: "About Me"},
        { path: "/favorites", label: "Favorites" },
        { path: "/cozy-corner", label: "Cozy Corner" }
    ];
}