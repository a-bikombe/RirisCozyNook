import { TestBed } from '@angular/core/testing';

import { CozyCornerComponent } from './cozy-corner.component';

describe('CozyCornerComponent', () => {
    let fixture: any;
    let app: CozyCornerComponent;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CozyCornerComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CozyCornerComponent);
        app = fixture.componentInstance;
        compiled = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('should include a Spotify iframe', () => {
        const iframe = compiled.querySelector('iframe[src*="spotify"]');
        expect(iframe).toBeTruthy();
    });
});
