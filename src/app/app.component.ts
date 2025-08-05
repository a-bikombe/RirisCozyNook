import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavUrl } from './models/nav-url';
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

    navUrls: NavUrl[] = [
        new NavUrl("/about-me", "About Me"),
        new NavUrl("/favorites", "Favorites"),
        new NavUrl("/cozy-corner", "Cozy Corner"),
    ];
}
