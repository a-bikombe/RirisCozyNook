import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CozyCornerComponent } from './cozy-corner.component';

describe('CozyCornerComponent', () => {
    let component: CozyCornerComponent;
    let fixture: ComponentFixture<CozyCornerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CozyCornerComponent], // standalone component
        }).compileComponents();

        fixture = TestBed.createComponent(CozyCornerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
