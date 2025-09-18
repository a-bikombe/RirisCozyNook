
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { BunnyFactService } from '@services/bunny-fact/bunny-fact.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BunnyFact } from '@models/bunny-fact.interface';
import { LoaderDotComponent } from '@components/loader-dot/loader-dot.component';
import { LoaderSpinnerComponent } from '@components/loader-spinner/loader-spinner.component';

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule, ClipboardModule, LoaderDotComponent, LoaderSpinnerComponent],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})
export class CozyCornerComponent implements OnInit {
    header = 'Welcome to the Cozy Corner!';
    facts: BunnyFact[] = [];
    fact = signal<BunnyFact | null>(null);
    copied = signal(false);
    loading = signal(false);
    loadingIframe = true;

    constructor(private bunnyService: BunnyFactService) { }

    ngOnInit() {
        this.reload();
    }

onIframeLoad() {
        this.loadingIframe = false;
    }

    reload() {
        this.loading.set(true);
        this.bunnyService.random().subscribe({
            next: f => { this.fact.set(f); this.loading.set(false); },
            error: () => this.loading.set(false)
        });
    }

    onCopy(success: boolean) {
        if (success) {
            this.copied.set(true);
        }
    }

    resetCopied() {
        this.copied.set(false);
    }
}