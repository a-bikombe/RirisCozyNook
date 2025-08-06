// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface CrewMember {
    id?: number;
    image: string;
    name: string;
    relationship: string;
    description: string;
}

@Injectable({ providedIn: 'root' })
export class CrewService {
    // private apiUrl = '/api/crew';
    private crew: CrewMember[] = [
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
        {
            image: 'lilly',
            name: 'Lillyann',
            relationship: 'Concert Buddy',
            description: 'My ride or die since middle school',
        },
        {
            image: 'sandy',
            name: 'Sandy',
            relationship: 'Karaoke Master',
            description: 'The best gift giver',
        },
    ];

    constructor() { }

    getCrew(): Observable<CrewMember[]> {
        return of(this.crew); // simulates HTTP GET
    }

    /* constructor(private http: HttpClient) { }

    getCrew(): Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.apiUrl);
    }
    */
}
