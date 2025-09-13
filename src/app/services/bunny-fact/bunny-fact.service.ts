import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface BunnyFact {
    id: number;
    fact: string;
}

type ListResponse = { facts: BunnyFact[] };
type RandomResponse = { fact: BunnyFact };

@Injectable({ providedIn: 'root' })
export class BunnyFactService {
    private http = inject(HttpClient);
    private base = environment.apiBase;

    /** GET /bunny-facts */
    getAll(): Observable<BunnyFact[]> {
        return this.http.get<ListResponse>(`${this.base}/bunny-facts`).pipe(
            map(res => res.facts),
            catchError(err => this.handle(err))
        );
    }

    /** GET /bunny-facts/random */
    getRandom(): Observable<BunnyFact> {
        return this.http.get<{ fact: BunnyFact }>(`${this.base}/bunny-facts/random`)
            .pipe(map(r => r.fact))
    }

    private handle(err: unknown) {
        // surface a friendly error; extend as needed
        return throwError(() => err);
    }
}