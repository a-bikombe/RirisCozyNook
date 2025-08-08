import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Song } from '../../models/music/song/song';
import { Album } from '../../models/music/album/album';

@Component({
    selector: 'favorites',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.scss'
})

export class FavoritesComponent {
    title: string = 'Favorites';
    colors: string[] = ["baby blue", "purple"];
    animals: string[] = ["whale sharks", "whales", "sharks"];
    food: string[] = [
        "pizza",
        "fries",
        "popcorn",
        "burgers (just patty, with cheese)",
        "fish",
        "clam strips",
        "shrimp",
        "grilled cheese",
        "dumplings",
        "pancakes",
        "waffles",
        "bagels",
        "french toast",
        "toast",
        "garlic bread"
    ];
    songs: Song[] = [
        new Song("Humility", "Gorillaz"),
        new Song("Sunflower, Vol. 6", "Harry Styles"),
        new Song("Blu", "Jon Bellion"),
        new Song("Fine Line", "Harry Styles"),
        new Song("Telepathy", "BTS")
    ];
    albums: Album[] = [
        new Album("Fine Line", "Harry Styles")
    ];
    artists: string[] = [
        "Harry Styles",
        "Gorillaz",
        "Wallows",
        "Djo",
        "TXT"
    ];
    snacks: string[] = [
        "Trolli eggs",
        "Peach rings",
        "Kitkats",
        "classic Lays",
        "kettle corn smartfood",
        "movie theater butter smartfood",
        "Pirate's Booty",
        "Funyuns",
        "Cape Cod chips",
        "fruit punch arizona",
        "minute maid watermelon punch",
        "salted caramel ice cream",
        "cotton candy ice cream",
        "brownie ice cream"
    ];
}
