import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { crew } from '../../../constants/about-me/crew.constants';
import { CrewMember } from '../../../interfaces/crew.interface';

@Component({
    selector: 'app-crew',
    imports: [CommonModule],
    templateUrl: './crew.component.html',
    styleUrl: './crew.component.scss'
})
export class CrewComponent {
    title: string = "Meet My Crew";
    hasError: boolean = false;
    isLoading: boolean = true;
    crew: CrewMember[] = crew;
}
