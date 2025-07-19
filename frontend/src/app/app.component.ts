import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavUrl } from './models/nav-url';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = "Riri's Cozy Nook";

    navUrls: NavUrl[] = [
        new NavUrl("/crew", "Crew"),
        new NavUrl("/favorites", "Favorites"),
        new NavUrl("/cozy-corner", "Cozy Corner"),
        new NavUrl("/dreams", "Dreams")
    ];
}
