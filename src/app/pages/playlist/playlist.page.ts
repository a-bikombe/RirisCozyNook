
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderSpinnerComponent } from '@components/loader-spinner/loader-spinner.component';

@Component({
    selector: 'playlist',
    standalone: true,
    imports: [CommonModule, LoaderSpinnerComponent],
    templateUrl: './playlist.page.html',
    styleUrl: './playlist.page.scss'
})
export class PlaylistPage {
    header = 'Welcome to the Playlist!';
    loadingIframe: boolean = true;

    onIframeLoad() {
        this.loadingIframe = false;
    }
}