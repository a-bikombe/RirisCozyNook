import { TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AboutMeComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutMeComponent],
            providers: [provideHttpClient(), provideHttpClientTesting()]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AboutMeComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
