
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BunnyFact, BunnyFactService } from '../../services/bunny-fact/bunny-fact.service';

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})
export class CozyCornerComponent {
    header = 'Welcome to the Cozy Corner!';
    private api = inject(BunnyFactService);
    fact?: BunnyFact;
    facts: BunnyFact[] = [];

    ngOnInit() {
        this.loadRandom();
    }

    loadRandom() {
        this.api.getRandom().subscribe(f => this.fact = f);
    }

    loadAll() {
        this.api.getAll().subscribe(list => this.facts = list);
    }
}
