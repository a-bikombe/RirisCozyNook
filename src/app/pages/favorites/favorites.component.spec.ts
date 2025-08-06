import { TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FavoritesComponent]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(FavoritesComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
