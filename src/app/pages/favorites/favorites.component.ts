import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Song } from '../../models/song/song';
import { Album } from '../../models/album/album';
import { Movie } from '../../models/movie/movie';
import { TVShow } from '../../models/tv-show/tv-show';
import { VideoGame } from '../../models/video-game/video-game';
import { songs, albums, movies, tvShows, videoGames, colors, animals, foods, artists, snacks } from './favorites.constants';

@Component({
    selector: 'favorites',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.scss'
})

export class FavoritesComponent {
    title: string = 'Favorites';

    songs: Song[] = songs;
    albums: Album[] = albums;
    movies: Movie[] = movies;
    tvShows: TVShow[] = tvShows;
    videoGames: VideoGame[] = videoGames;

    colors: string[] = colors;
    animals: string[] = animals;
    foods: string[] = foods;
    artists: string[] = artists;
    snacks: string[] = snacks;
}
