import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BunnyFactService {
    constructor(private http: HttpClient) {}

    getAllFacts(): Observable<string[]> {
        return this.http.get<any>('/api/bunny-facts.js').pipe(
            map(res => Array.isArray(res) ? res : res.bunnyFacts || [])
        );
    }

    getRandomFact(): Observable<string> {
        return this.http.get<{ fact: string }>('/api/bunny-facts.js').pipe(
            map(res => res.fact || '')
        );
    }
}
