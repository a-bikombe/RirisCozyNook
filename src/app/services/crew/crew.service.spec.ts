import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CrewService, CrewMember } from './crew.service';
import { provideHttpClient } from '@angular/common/http';

describe('CrewService', () => {
    let service: CrewService;
    let httpMock: HttpTestingController;

    const mockCrew: CrewMember[] = [
        {
            id: 1,
            image: 'test.jpg',
            name: 'Riri',
            relationship: 'Captain',
            description: 'Loves cozy corners.'
        },
        {
            id: 2,
            image: 'test2.jpg',
            name: 'Milo',
            relationship: 'First Mate',
            description: 'Soft and nibble-y.'
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CrewService, provideHttpClient(), provideHttpClientTesting()]
        });
        service = TestBed.inject(CrewService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Verifies that no unmatched requests are pending
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch crew members', () => {
        service.getCrew().subscribe((crew) => {
            expect(crew.length).toBe(2);
            expect(crew).toEqual(mockCrew);
        });

        const req = httpMock.expectOne('/api/crew');
        expect(req.request.method).toBe('GET');
        req.flush(mockCrew);
    });
});
