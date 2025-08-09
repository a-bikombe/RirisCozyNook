// crew.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrewComponent } from './crew.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CrewComponent', () => {
    let component: CrewComponent;
    let fixture: ComponentFixture<CrewComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CrewComponent], // standalone component
            providers: [provideHttpClient(), provideHttpClientTesting()],
        }).compileComponents();

        fixture = TestBed.createComponent(CrewComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement as HTMLElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display the title in an h3', () => {
        component.title = 'My Crew';
        fixture.detectChanges();

        const h3 = compiled.querySelector('h3');
        expect(h3).toBeTruthy();
        expect(h3?.textContent?.trim()).toBe('My Crew');
    });

    it('should show the empty state and no table when crew is empty', () => {
        component.crew = [];
        fixture.detectChanges();

        const emptyMsg = compiled.querySelector('.error p');
        expect(emptyMsg?.textContent?.trim()).toBe('No crew data yet.');

        const table = compiled.querySelector('table');
        expect(table).toBeNull();
    });

    it('should render a table with headers and one row per crew member', () => {
        component.crew = [
            {
                name: 'Evan',
                relationship: 'Boyfriend',
                image: 'evan',
                description: 'Loves wrestling',
            },
            {
                name: 'Riri',
                relationship: 'Captain',
                image: 'riri',
                description: 'Fearless leader',
            },
        ];
        fixture.detectChanges();

        const table = compiled.querySelector('table');
        expect(table).withContext('table should be rendered').toBeTruthy();

        const headerTexts = Array.from(
            compiled.querySelectorAll('thead th')
        ).map((th) => th.textContent?.trim());
        expect(headerTexts).toEqual([
            'Image',
            'Name',
            'Relationship',
            'Description',
        ]);

        const rows = compiled.querySelectorAll('tbody tr');
        expect(rows.length).toBe(2);

        // First row cell content checks
        const firstCells = rows[0].querySelectorAll('td');
        const img = firstCells[0].querySelector('img') as HTMLImageElement;
        expect(img).toBeTruthy();
        expect(img.getAttribute('src')).toContain('images/characters/evan.png');
        expect(firstCells[1].textContent?.trim()).toBe('Evan');
        expect(firstCells[2].textContent?.trim()).toBe('Boyfriend');
        expect(firstCells[3].textContent?.trim()).toBe('Loves wrestling');
    });

    it('should update the DOM if crew changes after initial render', () => {
        component.crew = [
            { name: 'Mo', relationship: 'First Mate', image: 'mo', description: 'Binky specialist' },
        ];
        fixture.detectChanges();

        let rows = compiled.querySelectorAll('tbody tr');
        expect(rows.length).toBe(1);

        component.crew = [
            ...component.crew,
            { name: 'Riri', relationship: 'Captain', image: 'riri', description: 'Fearless leader' },
        ];
        fixture.detectChanges();

        rows = compiled.querySelectorAll('tbody tr');
        expect(rows.length).toBe(2);
    });

    it('should not render the empty message when crew has members', () => {
        component.crew = [
            { name: 'Riri', relationship: 'Captain', image: 'riri', description: 'Fearless leader' },
        ];
        fixture.detectChanges();

        const emptyMsg = compiled.querySelector('.error p');
        expect(emptyMsg).toBeNull();
    });
});
