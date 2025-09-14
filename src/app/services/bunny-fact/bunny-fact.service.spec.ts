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

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});