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

    it('should render the main heading text', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const h2 = compiled.querySelector('h2');
        expect(h2).toBeTruthy();
        expect(h2?.textContent).toContain("Looks like you've found an unmarked nook");
    });

    it('should render the subheading text', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const h3 = compiled.querySelector('h3.center');
        expect(h3).toBeTruthy();
        expect(h3?.textContent).toContain("Let's get you back to somewhere warm and familiar.");
    });

    it('should include a sad bunny gif image with an alt attribute', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const img = compiled.querySelector('section img') as HTMLImageElement | null;
        expect(img).toBeTruthy();
        expect(img?.getAttribute('src')).toContain('gifs/sad_bunny.gif');
        // allow empty alt but assert attribute exists
        expect(img?.hasAttribute('alt')).toBeTrue();
    });

    it('section should have layout classes', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const section = compiled.querySelector('section.flex.row.center');
        expect(section).toBeTruthy();
    });

});