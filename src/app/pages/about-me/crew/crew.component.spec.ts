import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrewComponent } from './crew.component';
import { CommonModule } from '@angular/common';
import { crew } from '../about-me.constants';

describe('CrewComponent', () => {
    let component: CrewComponent;
    let fixture: ComponentFixture<CrewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, CrewComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CrewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct title', () => {
        expect(component.title).toBe('Meet My Crew');
    });

    it('should have hasError as false by default', () => {
        expect(component.hasError).toBeFalse();
    });

    it('should have isLoading as true by default', () => {
        expect(component.isLoading).toBeTrue();
    });

    it('should have crew array equal to imported crew', () => {
        expect(component.crew).toBe(crew);
    });

    it('should render the title in the template', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Meet My Crew');
    });
});
