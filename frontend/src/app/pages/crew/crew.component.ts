import { Component, OnInit } from '@angular/core';
import { CrewMember, CrewService } from '../../services/crew.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-crew',
    imports: [CommonModule],
    templateUrl: './crew.component.html',
    styleUrl: './crew.component.scss'
})
export class CrewComponent implements OnInit {
    crew: CrewMember[] = [];

    constructor(private crewService: CrewService) { }

    ngOnInit(): void {
        this.crewService.getCrew().subscribe((data) => {
            this.crew = data;
            console.log('Crew loaded:', data); // Add this line to debug
        });
    }
}
