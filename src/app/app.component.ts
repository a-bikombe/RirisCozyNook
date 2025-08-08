import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationItem } from './models/navigation-item/navigation-item';
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
        new NavigationItem("/about-me", "About Me"),
        new NavigationItem("/favorites", "Favorites"),
        new NavigationItem("/cozy-corner", "Cozy Corner"),
    ];
}
