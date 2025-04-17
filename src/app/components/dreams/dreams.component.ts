import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'dreams',
    imports: [CommonModule, MatListModule],
    templateUrl: './dreams.component.html',
    styleUrl: './dreams.component.scss'
})

export class DreamsComponent {
    header = 'Dreams';

    ideas = [
        "Things you've worked on",
        "Stuff you want to learn or try someday",
        "Even unfinished things that still meant something"
    ]
}
