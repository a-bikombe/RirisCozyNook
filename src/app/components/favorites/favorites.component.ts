import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'favorites',
    imports: [CommonModule, MatListModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.scss'
})

export class FavoritesComponent {
    header = 'Favorites';

    ideas = [
        "Games you've loved",
        "Movies you rewatch",
        "Music that makes you feel something",
        "Anything you want to recommend"
    ]
}
