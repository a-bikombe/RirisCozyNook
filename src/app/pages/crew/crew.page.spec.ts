import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrewPage } from './crew.page';
import { CommonModule } from '@angular/common';

describe('CrewPage', () => {
    let component: CrewPage;
    let fixture: ComponentFixture<CrewPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, CrewPage]
        }).compileComponents();

        fixture = TestBed.createComponent(CrewPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render the title in an h2', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const h2 = compiled.querySelector('h2');
        expect(h2).toBeTruthy();
        expect(h2?.textContent).toContain(component.title);
    });

    it('should render a table when crew data exists', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const table = compiled.querySelector('table');
        expect(table).toBeTruthy();
    });

    it('should render one table row per crew member', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const rows = compiled.querySelectorAll('tbody tr');
        // crew is imported from constants, ensure test expects that length
        expect(rows.length).toBe(component.crew.length);
    });

    it('first row should contain first member name and relationship', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const firstRow = compiled.querySelector('tbody tr');
        expect(firstRow).toBeTruthy();
        const cells = firstRow?.querySelectorAll('td');
        expect(cells && cells.length).toBeGreaterThanOrEqual(4);
        const nameCell = cells?.[1];
        const relationshipCell = cells?.[2];
        expect(nameCell?.textContent).toContain(component.crew[0].name);
        expect(relationshipCell?.textContent).toContain(component.crew[0].relationship);
    });

    it('images in the table should point to character images', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const imgs = compiled.querySelectorAll('tbody tr td img');
        expect(imgs.length).toBe(component.crew.length);
        imgs.forEach((img, idx) => {
            const src = img.getAttribute('src') || '';
            expect(src).toContain(`images/characters/${component.crew[idx].image}`);
        });
    });

});