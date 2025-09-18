import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BunnyFact } from '@models/bunny-fact.interface';

@Injectable({
    providedIn: 'root'
})
export class BunnyFactService {
    private apiUrl = `${environment.apiBase}/bunny-facts`;
    private http = inject(HttpClient);

    list() {
        return this.http.get<BunnyFact[]>(this.apiUrl);
    }

    random() {
        return this.http.get<BunnyFact>(`${this.apiUrl}/random`);
    }
}