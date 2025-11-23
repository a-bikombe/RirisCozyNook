import { Component } from '@angular/core';
import { wrestlersRanked } from '@constants/wrestler.constants';

@Component({
    selector: 'wrestling',
    imports: [],
    templateUrl: './wrestling.page.html',
    styleUrl: './wrestling.page.scss'
})
export class WrestlingPage {
    title: string = "Riri's Wrestling Corner";
    wrestlers = wrestlersRanked;
}
