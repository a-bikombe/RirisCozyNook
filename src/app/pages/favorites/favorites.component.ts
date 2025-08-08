import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Song } from '../../models/song/song';
import { Album } from '../../models/album/album';

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
        new Song("Humility", "Gorillaz", "gorillaz_the_now_now.jpg", true),
        new Song("Sunflower, Vol. 6", "Harry Styles", "harry_styles_fine_line.png"),
        new Song("Blu", "Jon Bellion", "jon_bellion_glory_sound_prep.png"),
        new Song("Fine Line", "Harry Styles", "harry_styles_fine_line.png"),
        new Song("Telepathy", "BTS", "bts_be.png")
    ];  // <img src="images/covers/albums/{{ song.cover }}.png" alt="" />
    albums: Album[] = [
        new Album("Fine Line", "Harry Styles", "harry_styles_fine_line.png", true),
        new Album("Demon Days", "Gorillaz", "gorillaz_demon_days.png"),
        new Album("DECIDE", "Djo", "djo_decide.png")
    ];  // <img src="images/covers/albums/{{ album.cover }}.png" alt="" />
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
