import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '@models/navigation-item.interface';
import { navRoutes } from '@constants/routes.constants';

@Component({
    selector: 'navbar-component',
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    navigationItems: NavigationItem[] = navRoutes;
}