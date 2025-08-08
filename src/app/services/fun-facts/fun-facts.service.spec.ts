import { TestBed } from '@angular/core/testing';
import { FunFactsService } from './fun-facts.service';

describe('FunFactsService', () => {
    let service: FunFactsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FunFactsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an observable of fun facts', (done) => {
        service.getFunFacts().subscribe((facts) => {
            expect(Array.isArray(facts)).toBeTrue();
            expect(facts.length).toBeGreaterThan(0);
            expect(typeof facts[0]).toBe('string');
            done();
        });
    });
});
