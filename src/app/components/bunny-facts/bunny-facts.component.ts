import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FavoriteIconComponent } from '@components/favorite-icon/favorite-icon.component';
import { LoaderDotComponent } from '@components/loader-dot/loader-dot.component';
import { BunnyFact } from '@models/bunny-fact.interface';
import { BunnyFactService } from '@services/bunny-fact/bunny-fact.service';
import { FavoritesService } from '@services/favorites/favorites.service';

@Component({
    selector: 'app-bunny-facts',
    imports: [CommonModule, ClipboardModule, LoaderDotComponent, FavoriteIconComponent],
    templateUrl: './bunny-facts.component.html',
    styleUrl: './bunny-facts.component.scss'
})
export class BunnyFactsComponent {
    facts: BunnyFact[] = [];
    fact: BunnyFact | null = null;
    copied: boolean = false;
    loading: boolean = false;
    favorited: boolean = false;

    constructor(private bunnyService: BunnyFactService, public favorites: FavoritesService) { }

    ngOnInit() {
        this.reload();
    }

    reload() {
        this.loading = true;
        this.bunnyService.random().subscribe({
            next: f => { this.fact = f; this.loading = false; this.favorited = this.favorites.isFavorited(f.id); },
            error: () => this.loading = false
        });
        this.bunnyService.all().subscribe({
            next: allFacts => {
                const favIds = this.favorites.all();
                this.facts = allFacts.filter(f => favIds.includes(f.id));
            }
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
        this.favorites.toggle(this.fact?.id);
        this.favorited = this.favorites.isFavorited(this.fact?.id);
        this.reload()
    }

    showFavorites(): BunnyFact[] {
        const favIds = this.favorites.all(); // e.g. [1, 3, 5]
        return this.facts.filter(f => favIds.includes(f.id));
    }

    trackById(_: number, f: BunnyFact) { return f.id; }
}