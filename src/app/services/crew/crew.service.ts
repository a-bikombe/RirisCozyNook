import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface CrewMember {
    id?: number;
    image: string;
    name: string;
    relationship: string;
    description: string;
}

@Injectable({ providedIn: 'root' })
export class CrewService {
    private apiUrl = '/api/crew';

    constructor(private http: HttpClient) { }

    getCrew(): Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.apiUrl);
    }

    addCrew(member: CrewMember): Observable<any> {
        return this.http.post(this.apiUrl, member);
    }
}
