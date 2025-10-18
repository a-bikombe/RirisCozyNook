
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomePage, CommonModule, RouterLink],
            providers: [
                { provide: ActivatedRoute, useValue: {} }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render the header h2 with name', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const h2 = compiled.querySelector('header h2');
        expect(h2).toBeTruthy();
        expect(h2?.textContent).toContain("Hi, I'm");
        expect(h2?.textContent).toContain('Arianna');
    });

    it('should render the profile image with class home-img', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const img = compiled.querySelector('header img.home-img') as HTMLImageElement | null;
        expect(img).toBeTruthy();
        expect(img?.getAttribute('src')).toContain('images/characters/arianna.png');
    });

    it('should render the featured sections and buttons with correct routerLink', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const aboutBtn = compiled.querySelector('button[routerlink="/about-me"], button[routerLink="/about-me"]');
        const favBtn = compiled.querySelector('button[routerlink="/favorites"], button[routerLink="/favorites"]');
        const cozyBtn = compiled.querySelector('button[routerlink="/cozy-corner"], button[routerLink="/cozy-corner"]');

        // Buttons should exist and contain expected text
        expect(aboutBtn).toBeTruthy();
        expect(aboutBtn?.textContent).toContain('About Me');

        expect(favBtn).toBeTruthy();
        expect(favBtn?.textContent).toContain('Favorites');

        expect(cozyBtn).toBeTruthy();
        expect(cozyBtn?.textContent).toContain('Cozy Corner');
    });
});