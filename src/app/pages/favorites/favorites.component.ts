import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song/song';
import { Album } from '../../models/album/album';
import { Movie } from '../../models/movie/movie';
import { TVShow } from '../../models/tv-show/tvshow';
import { VideoGame } from '../../models/video-game/video-game';

@Component({
    selector: 'favorites',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.scss'
})

export class FavoritesComponent implements OnInit {
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
    movies: Movie[] = [
        new Movie("Spider-Man: Far From Home", 2019, "spiderman_ffh.jpg", true)
    ];
    tvShows: TVShow[] = [
        new TVShow("Stranger Things", 2016, 2025, "stranger_things.jpg", true)
    ];
    videoGames: VideoGame[] = [
        new VideoGame("Coral Island", "Steam Deck", "coral_island.jpg", true)
    ];
    songs: Song[] = [
        new Song("Humility", "Gorillaz", "gorillaz_the_now_now.jpg", true),
        new Song("Sunflower, Vol. 6", "Harry Styles", "harry_styles_fine_line.png"),
        new Song("Blu", "Jon Bellion", "jon_bellion_glory_sound_prep.png"),
        new Song("Fine Line", "Harry Styles", "harry_styles_fine_line.png"),
        new Song("Telepathy", "BTS", "bts_be.png")
    ];
    albums: Album[] = [
        new Album("Fine Line", "Harry Styles", "harry_styles_fine_line.png", true),
        new Album("Demon Days", "Gorillaz", "gorillaz_demon_days.png"),
        new Album("DECIDE", "Djo", "djo_decide.png")
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
    favoriteMovie: Movie | undefined;
    favoriteTVShow: TVShow | undefined;
    favoriteVideoGame: VideoGame | undefined;
    favoriteSong: Song | undefined;
    favoriteAlbum: Album | undefined;

    ngOnInit() {
        this.favoriteMovie = this.movies.find(movie => movie.isFavorite);
        this.favoriteTVShow = this.tvShows.find(tvShow => tvShow.isFavorite);
        this.favoriteVideoGame = this.videoGames.find(videoGame => videoGame.isFavorite);
        this.favoriteSong = this.songs.find(song => song.isFavorite);
        this.favoriteAlbum = this.albums.find(album => album.isFavorite);
    }
}
