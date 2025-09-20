import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FavoriteIconComponent } from '@components/favorite-icon/favorite-icon.component';
import { LoaderDotComponent } from '@components/loader-dot/loader-dot.component';
import { BunnyFact } from '@models/bunny-fact.interface';
import { BunnyFactService } from '@services/bunny-fact/bunny-fact.service';
import { FavoriteService } from '@services/favorite/favorite.service';

@Component({
    selector: 'bunny-facts',
    imports: [CommonModule, ClipboardModule, LoaderDotComponent, FavoriteIconComponent],
    templateUrl: './bunny-facts.page.html',
    styleUrl: './bunny-facts.page.scss'
})
export class BunnyFactsPage {
    title: string = "Fun Facts About Bunnies!";
    facts: BunnyFact[] = [];
    fact: BunnyFact | null = null;
    copied: boolean = false;
    loading: boolean = false;
    favorited: boolean = false;

    constructor(private bunnyService: BunnyFactService, public favorite: FavoriteService) { }

    ngOnInit() {
        this.reload();
    }

    reload() {
        this.loading = true;
        this.bunnyService.random().subscribe({
            next: f => { this.fact = f; this.loading = false; this.favorited = this.favorite.isFavorited(f.id); },
            error: () => this.loading = false
        });
        this.bunnyService.all().subscribe({
            next: allFacts => {
                const favIds = this.favorite.all();
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
        this.favorite.toggle(this.fact?.id);
        this.favorited = this.favorite.isFavorited(this.fact?.id);
        this.reload()
    }

    showFavorites(): BunnyFact[] {
        const favIds = this.favorite.all(); // e.g. [1, 3, 5]
        return this.facts.filter(f => favIds.includes(f.id));
    }

    trackById(_: number, f: BunnyFact) { return f.id; }
}