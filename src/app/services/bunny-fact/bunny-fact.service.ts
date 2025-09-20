import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BunnyFact } from '@models/bunny-fact.interface';
import { env } from 'env/env';

@Injectable({
    providedIn: 'root'
})
export class BunnyFactService {
    private apiUrl = `${env.apiBase}/bunny-facts`;
    private http = inject(HttpClient);

    all() {
        return this.http.get<BunnyFact[]>(this.apiUrl);
    }

    random() {
        return this.http.get<BunnyFact>(`${this.apiUrl}/random`);
    }
}