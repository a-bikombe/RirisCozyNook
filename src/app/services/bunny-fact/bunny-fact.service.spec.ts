import { TestBed } from '@angular/core/testing';
import { BunnyFactService } from './bunny-fact.service';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
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

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an array of facts when response is an array', () => {
        const mockFacts = ['Fact 1', 'Fact 2'];
        service.getAllFacts().subscribe(facts => {
            expect(facts).toEqual(mockFacts);
        });
        const req = httpMock.expectOne('/api/bunny-facts.js');
        expect(req.request.method).toBe('GET');
        req.flush(mockFacts);
    });

    it('should return bunnyFacts array when response has bunnyFacts property', () => {
        const mockResponse = { bunnyFacts: ['Fact A', 'Fact B'] };
        service.getAllFacts().subscribe(facts => {
            expect(facts).toEqual(['Fact A', 'Fact B']);
        });
        const req = httpMock.expectOne('/api/bunny-facts.js');
        req.flush(mockResponse);
    });

    it('should return empty array when response is not array and has no bunnyFacts', () => {
        const mockResponse = { somethingElse: true };
        service.getAllFacts().subscribe(facts => {
            expect(facts).toEqual([]);
        });
        const req = httpMock.expectOne('/api/bunny-facts.js');
        req.flush(mockResponse);
    });

    it('should return the fact string from the response', () => {
        const mockFact = { fact: 'Bunnies are cute!' };
        service.getRandomFact().subscribe(fact => {
            expect(fact).toBe('Bunnies are cute!');
        });
        const req = httpMock.expectOne('/api/bunny-facts.js');
        expect(req.request.method).toBe('GET');
        req.flush(mockFact);
    });

    it('should return empty string if fact property is missing', () => {
        const mockResponse = { notFact: 'No fact here' };
        service.getRandomFact().subscribe(fact => {
            expect(fact).toBe('');
        });
        const req = httpMock.expectOne('/api/bunny-facts.js');
        req.flush(mockResponse);
    });
});
