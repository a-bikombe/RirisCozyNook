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
    title: string = "Meet My Crew";
    hasError: boolean = false;
    isLoading: boolean = true;
    crew: CrewMember[] = [];

    constructor(private crewService: CrewService) { }

    ngOnInit() {
        this.loadCrew();
    }

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

}
