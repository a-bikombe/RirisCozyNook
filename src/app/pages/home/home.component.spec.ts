import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [
                { provide: ActivatedRoute, useValue: {} }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display the header and name', () => {
        const headerText = compiled.querySelector('header h2')?.textContent;
        expect(headerText).toContain(component.header);
        expect(headerText).toContain(component.name);
    });

    it('should display the main title', () => {
        const mainTitle = compiled.querySelector('main h3')?.textContent;
        expect(mainTitle).toContain(component.mainTitle);
    });

    it('should render 3 navigation buttons', () => {
        const buttons = compiled.querySelectorAll('button.card.clickable.featured');
        expect(buttons.length).toBe(3);
        const labels = ['About Me', 'Favorites', 'Cozy Corner'];
        buttons.forEach((button, index) => {
            expect(button.textContent?.trim()).toBe(labels[index]);
        });
    });

    it('should have a profile image with correct class', () => {
        const img = compiled.querySelector('img.home-img');
        expect(img).toBeTruthy();
        expect(img?.getAttribute('src')).toBe('images/arianna.png');
    });
});
