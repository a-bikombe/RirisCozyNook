// app.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { AppRoot } from './app.root';
import { ActivatedRoute } from '@angular/router';

describe('AppRoot', () => {
    let fixture: any;
    let component: AppRoot;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppRoot],
            providers: [{ provide: ActivatedRoute, useValue: {} }],
        }).compileComponents();

        fixture = TestBed.createComponent(AppRoot);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct title', () => {
        expect(component.title).toBe("Riri's Cozy Nook");
    });

    it('should have the correct footerText', () => {
        expect(component.footerText).toContain("Copyright");
        expect(component.footerText).toContain(component.title);
    });

    it('should have a currentDate property of type Date', () => {
        expect(component.currentDate instanceof Date).toBeTrue();
    });
});