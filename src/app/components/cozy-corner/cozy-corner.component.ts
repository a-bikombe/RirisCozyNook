
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BunnyFactService } from '../../services/bunny-fact/bunny-fact.service';

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})
export class CozyCornerComponent {
    header = 'Welcome to the Cozy Corner!';
    facts: any[] = [];
    fact: any;

    constructor(private bunnyService: BunnyFactService) { }

    ngOnInit() {
        this.loadRandomFact();
    }

    loadRandomFact() {
        this.bunnyService.getRandomFact().subscribe(data => this.fact = data);
    }
}