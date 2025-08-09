import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Song, songs } from '../../models/song/song';
import { Album } from '../../models/album/album';
import { Movie, movies } from '../../models/movie/movie';
import { TVShow, tvShows } from '../../models/tv-show/tv-show';
import { VideoGame, videoGames } from '../../models/video-game/video-game';
import { albums, colors, animals, foods, artists, snacks } from './favorites.constants';

@Component({
    selector: 'favorites',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.scss'
})

export class FavoritesComponent implements OnInit {
    title: string = 'Favorites';
    movies: Movie[] = movies;
    tvShows: TVShow[] = tvShows;
    videoGames: VideoGame[] = videoGames;
    songs: Song[] = songs;
    albums: Album[] = albums;

    colors: string[] = colors;
    animals: string[] = animals;
    foods: string[] = foods;
    artists: string[] = artists;
    snacks: string[] = snacks;

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
