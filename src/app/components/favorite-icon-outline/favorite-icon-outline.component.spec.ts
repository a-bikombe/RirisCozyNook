import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteIconOutlineComponent } from './favorite-icon-outline.component';

describe('FavoriteIconOutlineComponent', () => {
    let component: FavoriteIconOutlineComponent;
    let fixture: ComponentFixture<FavoriteIconOutlineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FavoriteIconOutlineComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FavoriteIconOutlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});