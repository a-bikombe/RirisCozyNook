import { TestBed } from '@angular/core/testing';

import { CozyCornerComponent } from './cozy-corner.component';

describe('CozyCornerComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CozyCornerComponent]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(CozyCornerComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
