import { Component } from '@angular/core';
import { kpopMembersRanked } from '@constants/kpop.constants';

@Component({
    selector: 'kpop',
    imports: [],
    templateUrl: './kpop.page.html',
    styleUrl: './kpop.page.scss'
})
export class KpopPage {
    title: string = "K-Pop Corner";
    kpopMembers = kpopMembersRanked;
}
