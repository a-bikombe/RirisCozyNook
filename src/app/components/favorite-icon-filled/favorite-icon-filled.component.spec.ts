import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteIconFilledComponent } from './favorite-icon-filled.component';

describe('FavoriteIconFilledComponent', () => {
  let component: FavoriteIconFilledComponent;
  let fixture: ComponentFixture<FavoriteIconFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteIconFilledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteIconFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
