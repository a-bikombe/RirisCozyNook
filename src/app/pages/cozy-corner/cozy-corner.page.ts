
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderSpinnerComponent } from '@components/loader-spinner/loader-spinner.component';
import { BunnyFactsComponent } from "../../components/bunny-facts/bunny-facts.component";

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule, BunnyFactsComponent, LoaderSpinnerComponent],
    templateUrl: './cozy-corner.page.html',
    styleUrl: './cozy-corner.page.scss'
})
export class CozyCornerPage {
    header = 'Welcome to the Cozy Corner!';
    loadingIframe: boolean = true;

    onIframeLoad() {
        this.loadingIframe = false;
    }
}