import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundPage } from './not-found.page';

describe('NotFoundPage', () => {
    let component: NotFoundPage;
    let fixture: ComponentFixture<NotFoundPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NotFoundPage]
        }).compileComponents();

        fixture = TestBed.createComponent(NotFoundPage);
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