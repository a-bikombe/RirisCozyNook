import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                { provide: ActivatedRoute, useValue: {} }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title in the header link', () => {
        const titleElement = compiled.querySelector('header h1 a');
        expect(titleElement?.textContent?.trim()).toBe(component.title);
    });

    it('should display footer text', () => {
        const footerElement = compiled.querySelector('footer p');
        expect(footerElement?.textContent).toContain(component.footerText);
    });

    it('should render all navigation links', () => {
        const navLinks = compiled.querySelectorAll('nav a');
        expect(navLinks.length).toBe(component.navUrls.length);

        navLinks.forEach((link, index) => {
            expect(link.textContent?.trim()).toBe(component.navUrls[index].label);
        });
    });

    it('should have router-outlet in the main section', () => {
        const routerOutlet = compiled.querySelector('main router-outlet');
        expect(routerOutlet).not.toBeNull();
    });
});
