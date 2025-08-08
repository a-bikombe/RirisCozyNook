import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewComponent } from './crew.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CrewComponent', () => {
    let component: CrewComponent;
    let fixture: ComponentFixture<CrewComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CrewComponent],
            providers: [provideHttpClient(), provideHttpClientTesting()]
        }).compileComponents();

        fixture = TestBed.createComponent(CrewComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display the title in an h3', () => {
        component.title = 'My Crew';
        fixture.detectChanges();
        const h3 = compiled.querySelector('h3');
        expect(h3?.textContent).toContain('My Crew');
    });

    it('should render a table when crew has members', () => {
        component.crew = [
            {
                name: 'Evan',
                relationship: 'Boyfriend',
                image: 'evan',
                description: 'Loves wrestling'
            }
        ];
        fixture.detectChanges();

        const tableRows = compiled.querySelectorAll('tbody tr');
        expect(tableRows.length).toBe(6);

        const cells = tableRows[0].querySelectorAll('td');
        expect(cells[0].querySelector('img')?.getAttribute('src')).toContain('images/characters/evan.png');
        expect(cells[1].textContent).toContain('Evan');
        expect(cells[2].textContent).toContain('Boyfriend');
        expect(cells[3].textContent).toContain('Loves wrestling');
    });
});
