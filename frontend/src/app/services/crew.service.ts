import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CrewMember {
    id: number;
    name: string;
    relationship: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class CrewService {
    private apiUrl = 'http://localhost:3000/crew';

    constructor(private http: HttpClient) { }

    getCrew(): Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.apiUrl);
    }
}
