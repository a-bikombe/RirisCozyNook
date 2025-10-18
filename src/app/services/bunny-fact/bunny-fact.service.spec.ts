import { TestBed } from '@angular/core/testing';
import { BunnyFactService } from './bunny-fact.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('BunnyFactService', () => {
    let service: BunnyFactService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BunnyFactService, provideHttpClient(), provideHttpClientTesting()]
        });
        service = TestBed.inject(BunnyFactService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('all() should fetch an array of BunnyFact', (done) => {
        const mockFacts = [
            { id: 1, fact: 'Bunnies love carrots' },
            { id: 2, fact: 'Bunnies hop' }
        ];

        service.all().subscribe(result => {
            expect(Array.isArray(result)).toBeTrue();
            expect(result.length).toBe(2);
            expect(result[0].fact).toBe('Bunnies love carrots');
            done();
        });

        const req = httpMock.expectOne(r => r.url.endsWith('/bunny-facts') && r.method === 'GET');
        req.flush(mockFacts);
    });

    it('random() should fetch a single BunnyFact', (done) => {
        const mockFact = { id: 42, fact: 'A random bunny fact' };

        service.random().subscribe(result => {
            expect(result).toBeTruthy();
            expect((result as any).id).toBe(42);
            expect((result as any).fact).toBe('A random bunny fact');
            done();
        });

        const req = httpMock.expectOne(r => r.url.endsWith('/bunny-facts/random') && r.method === 'GET');
        req.flush(mockFact);
    });

    it('random() should propagate HTTP errors', (done) => {
        service.random().subscribe({
            next: () => fail('expected error'),
            error: (err) => {
                expect(err).toBeTruthy();
                done();
            }
        });

        const req = httpMock.expectOne(r => r.url.endsWith('/bunny-facts/random') && r.method === 'GET');
        req.flush({ message: 'server error' }, { status: 500, statusText: 'Server Error' });
    });

});