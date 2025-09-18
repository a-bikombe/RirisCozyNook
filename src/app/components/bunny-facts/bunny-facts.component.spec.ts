import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunnyFactsComponent } from './bunny-facts.component';

describe('BunnyFactsComponent', () => {
    let component: BunnyFactsComponent;
    let fixture: ComponentFixture<BunnyFactsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BunnyFactsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BunnyFactsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
