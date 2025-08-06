import { Component, OnInit } from '@angular/core';
import { CrewMember, CrewService } from '../../../services/crew/crew.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-crew',
    imports: [CommonModule],
    templateUrl: './crew.component.html',
    styleUrl: './crew.component.scss'
})
export class CrewComponent implements OnInit {
    title: string = "Here's My Crew!";
    hasError: boolean = false;
    isLoading: boolean = true;
    crew: CrewMember[] = [
        {
            image: 'evan',
            name: 'Evan',
            relationship: 'Boyfriend',
            description: 'Loves wrestling and dealing with Milo’s antics',
        },
        {
            image: 'mo',
            name: 'Milo',
            relationship: 'Bunny',
            description: 'Attacks everyone at any opportunity',
        },
        {
            image: 'abby',
            name: 'Abby',
            relationship: 'Best Friend',
            description: 'Graciously listens to me yap about celebrities',
        },
        {
            image: 'rachel',
            name: 'Rachel',
            relationship: 'Chaos Coordinator',
            description: 'Encourages my bad ideas and roots for the downfall of fictional men',
        },
    ];
    // newMember: CrewMember = { image: '', name: '', relationship: '', description: '' };

    constructor(private crewService: CrewService) { }

    ngOnInit() {
        // this.loadCrew();
    }

    /*
    loadCrew() {
        this.crewService.getCrew().subscribe({
            next: (data) => {
                this.crew = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error(err);
                this.hasError = true;
                this.isLoading = false;
            }
        });
    }
    */
}
