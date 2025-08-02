import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-crew',
    imports: [CommonModule],
    templateUrl: './crew.component.html',
    styleUrl: './crew.component.scss'
})
export class CrewComponent {
    crew = [
        {
            'name': 'Evan',
            'relationship': 'boyfriend',
            'description': 'Amazing'
        }
    ]
}
