
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BunnyFactService } from '@services/bunny-fact/bunny-fact.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BunnyFact } from '@models/bunny-fact.interface';
import { LoaderDotComponent } from '@components/loader-dot/loader-dot.component';
import { LoaderSpinnerComponent } from '@components/loader-spinner/loader-spinner.component';
import { FavoritesService } from '@services/favorites/favorites.service';
import { FavoriteIconFilledComponent } from "@components/favorite-icon-filled/favorite-icon-filled.component";
import { FavoriteIconOutlineComponent } from '@components/favorite-icon-outline/favorite-icon-outline.component';

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule, ClipboardModule, LoaderDotComponent, LoaderSpinnerComponent, FavoriteIconFilledComponent, FavoriteIconOutlineComponent],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})
export class CozyCornerComponent implements OnInit {
    header = 'Welcome to the Cozy Corner!';
    facts: BunnyFact[] = [];
    fact: BunnyFact | null = null;
    copied: boolean = false;
    loading: boolean = false;
    loadingIframe: boolean = true;
    favorited: boolean = false;

    constructor(private bunnyService: BunnyFactService, public favorites: FavoritesService) { }

    ngOnInit() {
        this.reload();
        this.favorited = this.favorites.isFavorited(this.fact?.id);
    }

    onIframeLoad() {
        this.loadingIframe = false;
    }

    reload() {
        this.loading = true;
        this.bunnyService.random().subscribe({
            next: f => { this.fact = f; this.loading = false; },
            error: () => this.loading = false
        });
    }

    onCopy(success: boolean) {
        if (success) {
            this.copied = true;
        }
    }

    resetCopied() {
        this.copied = false;
    }

    toggleFavorite() {
        console.log(this.fact?.id);
        this.favorites.toggle(this.fact?.id);
        this.favorited = this.favorites.isFavorited(this.fact?.id);
    }
}