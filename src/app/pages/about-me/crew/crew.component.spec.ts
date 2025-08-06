import { TestBed } from '@angular/core/testing';

import { CrewComponent } from './crew.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CrewComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CrewComponent],
            providers: [provideHttpClient(), provideHttpClientTesting()]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(CrewComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
