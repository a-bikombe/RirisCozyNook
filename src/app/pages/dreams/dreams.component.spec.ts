import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DreamsComponent } from './dreams.component';

describe('DreamsComponent', () => {
    let component: DreamsComponent;
    let fixture: ComponentFixture<DreamsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DreamsComponent], // ✅ For standalone component
        }).compileComponents();

        fixture = TestBed.createComponent(DreamsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
