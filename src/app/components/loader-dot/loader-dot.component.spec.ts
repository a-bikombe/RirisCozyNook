import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDotComponent } from './loader-dot.component';

describe('LoaderDotComponent', () => {
    let component: LoaderDotComponent;
    let fixture: ComponentFixture<LoaderDotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoaderDotComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoaderDotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
