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

    it('should render the title as a link to "/"', () => {
    const { fixture } = create();
    const titleLink: HTMLAnchorElement = fixture.nativeElement.querySelector('h1 a');
    expect(titleLink).withContext('title link not found').toBeTruthy();
    expect(titleLink.textContent?.trim()).toBe("Riri's Cozy Nook");

    // RouterTestingModule won’t set href without a real navigation,
    // but Angular reflects bound inputs for debug; this is stable in tests.
    const debugLink = fixture.debugElement.query(By.css('h1 a'));
    expect(debugLink.properties['ngReflectRouterLink']).toBe('/');
  });


    itit('should expose three navigation items with expected labels/paths', () => {
    const { component } = create();
    expect(component.navigationItems.length).toBe(3);
    expect(component.navigationItems).toEqual([
      { path: '/about-me', label: 'About Me' },
      { path: '/favorites', label: 'Favorites' },
      { path: '/cozy-corner', label: 'Cozy Corner' },
    ]);
  });

  it('should render the navigation list with correct labels and links', () => {
    const { fixture } = create();
    const links = fixture.debugElement.queryAll(By.css('.nav-list a'));
    expect(links.length).toBe(3);

    const texts = links.map(l => (l.nativeElement as HTMLAnchorElement).textContent.trim());
    expect(texts).toEqual(['About Me', 'Favorites', 'Cozy Corner']);

    const reflected = links.map(l => l.properties['ngReflectRouterLink']);
    expect(reflected).toEqual(['/about-me', '/favorites', '/cozy-corner']);
  });

  it('should include a router-outlet element', () => {
    const { fixture } = create();
    const outlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(outlet).toBeTruthy();
  });

  it('should render the footer with copyright and a formatted date', () => {
    const { fixture } = create();
    const footerText = (fixture.nativeElement.querySelector('footer p') as HTMLElement).textContent || '';
    expect(footerText).toContain('Copyright Riri\'s Cozy Nook —');

    // DatePipe default includes the year; assert year to avoid locale brittleness
    const year = new Date().getFullYear().toString();
    expect(footerText).toContain(year);
  });

});
