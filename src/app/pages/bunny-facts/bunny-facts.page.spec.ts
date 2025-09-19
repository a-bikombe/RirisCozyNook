import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunnyFactsPage } from './bunny-facts.page';

describe('BunnyFactsPage', () => {
    let component: BunnyFactsPage;
    let fixture: ComponentFixture<BunnyFactsPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BunnyFactsPage]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BunnyFactsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
