
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent, CommonModule, RouterLink],
            providers: [
                { provide: ActivatedRoute, useValue: {} }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the HomeComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should have header set to "Hi, I\'m"', () => {
        expect(component.header).toBe("Hi, I'm");
    });

    it('should have name set to "Arianna"', () => {
        expect(component.name).toBe("Arianna");
    });

    it('should have mainTitle set to "Featured Sections"', () => {
        expect(component.mainTitle).toBe("Featured Sections");
    });
});
