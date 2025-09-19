import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewMember } from '@models/crew.interface';
import { crew } from '@constants/about-me.constants';

@Component({
    selector: 'crew',
    imports: [CommonModule],
    templateUrl: './crew.page.html',
    styleUrl: './crew.page.scss'
})
export class CrewPage {
    title: string = "Meet My Crew";
    hasError: boolean = false;
    isLoading: boolean = true;
    crew: CrewMember[] = crew;
}