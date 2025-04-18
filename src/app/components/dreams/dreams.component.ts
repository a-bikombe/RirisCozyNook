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

    aprilBucketList: string[] = [
        "Watch a comfort movie you haven’t seen in years",
        "Try a new recipe with ingredients you already have",
        "Journal outside, even just for 5 minutes",
        "Make a mini playlist for coding time",
        "Do a photo walk and capture tiny beautiful things",
        "Revisit a game you haven’t played in forever",
        "Make a tiny gift or letter for someone you care about",
        "Rearrange or decorate a small corner of your space",
        "Watch the sunrise or sunset on purpose"
];

    ideas = [
        "Things you've worked on",
        "Stuff you want to learn or try someday",
        "Even unfinished things that still meant something"
    ]
}
