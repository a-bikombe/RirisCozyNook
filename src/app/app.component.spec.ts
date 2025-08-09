// app.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent (standalone, no RouterTestingModule)', () => {
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

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the title as a link inside h1', () => {
        const h1 = compiled.querySelector('h1');
        expect(h1).toBeTruthy();
        const a = h1!.querySelector('a');
        expect(a).toBeTruthy();
        expect(a!.textContent?.trim()).toBe(`Riri's Cozy Nook`);
    });

    it('should render 3 navigation items with the expected labels', () => {
        const navLinks = Array.from(compiled.querySelectorAll('.nav-list a'));
        expect(navLinks.length).toBe(3);
        const labels = navLinks.map((el) => el.textContent?.trim());
        expect(labels).toEqual(['About Me', 'Favorites', 'Cozy Corner']);
    });

    it('should include a router-outlet element', () => {
        const outlet = compiled.querySelector('router-outlet');
        expect(outlet).toBeTruthy();
    });

    it('should render footer with copyright and the current year', () => {
        const p = compiled.querySelector('footer p')!;
        expect(p).toBeTruthy();
        expect(p.textContent).toContain(`Copyright ${component.title} —`);
        expect(p.textContent).toContain(new Date().getFullYear().toString());
    });

    // Optional: sanity check that the nav list is inside <nav> and <ul>
    it('should structure nav as <nav><ul><li><a>…', () => {
        const nav = compiled.querySelector('nav.navbar');
        expect(nav).toBeTruthy();
        const ul = nav!.querySelector('ul.nav-list');
        expect(ul).toBeTruthy();
        const lis = ul!.querySelectorAll('li');
        expect(lis.length).toBe(3);
        expect(Array.from(lis)[0].querySelector('a')).toBeTruthy();
    });
});
