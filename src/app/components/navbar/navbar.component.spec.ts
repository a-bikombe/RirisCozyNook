import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent, RouterTestingModule],
            providers: [
                { provide: ActivatedRoute, useValue: { snapshot: {}, url: [] } }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render all navigation labels', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const navTexts = Array.from(compiled.querySelectorAll('nav a')).map(a => a.textContent?.trim());
        component.navigationItems.forEach(item => {
            expect(navTexts).toContain(item.label);
        });
    });

    it('each navigation link should have the correct routerLink attribute', () => {
        const debugAnchors = fixture.debugElement.queryAll(By.css('nav a'));
        expect(debugAnchors.length).toBe(component.navigationItems.length);
        debugAnchors.forEach((de, idx) => {
            // RouterLink is an attribute/directive; in test DOM Angular usually exposes it as ng-reflect-router-link
            const reflected = de.attributes['ng-reflect-router-link'] || de.attributes['routerlink'] || de.attributes['routerLink'];
            expect(reflected).toBe(component.navigationItems[idx].path);
        });
    });
});