import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '@models/navigation-item.interface';

@Component({
    selector: 'navbar-component',
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    navigationItems: NavigationItem[] = [
        { path: "/about-me", label: "About Me" },
        { path: "/crew", label: "My Crew" },
        { path: "/favorites", label: "Favorites" },
        { path: "/playlist", label: "My Playlist" },
        { path: "/bunny-facts", label: "Bunny Facts" }
    ];
}