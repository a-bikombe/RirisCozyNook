import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '@models/navigation-item.interface';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    navigationItems: NavigationItem[] = [
        { path: "/about-me", label: "About Me" },
        { path: "/favorites", label: "Favorites" },
        { path: "/cozy-corner", label: "Cozy Corner" }
    ];
}
