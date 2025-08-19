// app.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
    let fixture: any;
    let component: AppComponent;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [{ provide: ActivatedRoute, useValue: {} }],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
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

    it('should have navigationItems with correct paths and labels', () => {
        expect(component.navigationItems.length).toBe(3);
        expect(component.navigationItems[0]).toEqual({ path: "/about-me", label: "About Me" });
        expect(component.navigationItems[1]).toEqual({ path: "/favorites", label: "Favorites" });
        expect(component.navigationItems[2]).toEqual({ path: "/cozy-corner", label: "Cozy Corner" });
    });
});

