import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpopPage } from './kpop.page';

describe('KpopPage', () => {
    let component: KpopPage;
    let fixture: ComponentFixture<KpopPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [KpopPage]
        })
            .compileComponents();

        fixture = TestBed.createComponent(KpopPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
