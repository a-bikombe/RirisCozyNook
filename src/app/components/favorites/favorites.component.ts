import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { VideoGame } from '../../models/video-game';
import { songs, albums, movies, tvShows, videoGames, colors, animals, foods, artists, snacks } from './favorites.constants';
import { Album } from '../../models/album';
import { Movie } from '../../models/movie';
import { Song } from '../../models/song';
import { TVShow } from '../../models/tv-show';

@Component({
    selector: 'favorites',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.scss'
})

export class FavoritesComponent {
    @ViewChild('favoritesDialog') favoritesDialog!: ElementRef<HTMLDialogElement>;
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

    dialogTitle: string = '';
    dialogItems: string[] = [];

    constructor(private renderer: Renderer2) { }

    openDialog(title: string, items: string[]) {
        this.dialogTitle = `My Favorite ${title}!`;
        this.dialogItems = items;

        let dialog = this.favoritesDialog.nativeElement;

        switch (title) {
            case 'Colors':
                this.renderer.addClass(dialog, 'blue');
                break;
            case 'Animals':
                this.renderer.addClass(dialog, 'pink');
                break;
            case 'Foods':
                this.renderer.addClass(dialog, 'yellow');
                break;
            case 'Artists':
                this.renderer.addClass(dialog, 'green');
                break;
            case 'Snacks':
                this.renderer.addClass(dialog, 'purple');
                break;
            default:
                break;
        }

        dialog.showModal();
        this.renderer.addClass(dialog, 'opening');
        setTimeout(() => this.renderer.removeClass(dialog, 'opening'), 300);
        this.renderer.addClass(dialog, 'visible');
    }

    closeWithAnimation() {
        let dialog = this.favoritesDialog.nativeElement;;

        this.renderer.removeClass(dialog, 'visible');
        this.renderer.addClass(dialog, 'closing');

        setTimeout(() => {
            this.renderer.removeClass(dialog, 'closing');
            dialog.close();
        }, 300);
    }

    onDialogClose() {
        this.dialogTitle = '';
        this.dialogItems = [];
        let dialog = this.favoritesDialog.nativeElement;;

        // Add closing class for animation if not already present
        if (!dialog.classList.contains('closing')) {
            this.renderer.addClass(dialog, 'closing');
            setTimeout(() => {
                this.renderer.removeClass(dialog, 'closing');
            }, 300);
        }

        this.renderer.removeClass(dialog, 'visible');
        this.renderer.removeClass(dialog, 'blue');
        this.renderer.removeClass(dialog, 'pink');
        this.renderer.removeClass(dialog, 'yellow');
        this.renderer.removeClass(dialog, 'purple');
        this.renderer.removeClass(dialog, 'green');
    }

}