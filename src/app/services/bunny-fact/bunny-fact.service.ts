import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BunnyFactService {
    private apiUrl = 'http://localhost:3000/api/bunny-facts'; // backend route

    constructor(private http: HttpClient) { }

    getFacts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getRandomFact(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/random`);
    }
}