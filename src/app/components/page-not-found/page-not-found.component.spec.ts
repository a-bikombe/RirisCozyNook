import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PageNotFoundComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the template', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent?.toLowerCase()).toContain("unmarked nook");
    });

    it('should render a heading', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const heading = compiled.querySelector('h1,h2,h3');
        expect(heading).toBeTruthy();
        expect(heading?.textContent?.toLowerCase()).toContain('nook');
    });
});