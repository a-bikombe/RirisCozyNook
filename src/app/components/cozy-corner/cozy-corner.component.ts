
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BunnyFactService } from '../../services/bunny-fact/bunny-fact.service';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule, ClipboardModule],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})
export class CozyCornerComponent implements OnInit {
    header = 'Welcome to the Cozy Corner!';
    facts: any[] = [];
    fact: any;

    constructor(private bunnyService: BunnyFactService, private clipboard: Clipboard) { }

    ngOnInit() {
        this.loadRandomFact();
    }

    loadRandomFact() {
        this.bunnyService.getRandomFact().subscribe(data => {
            this.fact = data;
        });
    }

    onCopy(success: boolean) {
        console.log(success ? 'Text copied to clipboard!' : 'Copy failed.');
    }
}