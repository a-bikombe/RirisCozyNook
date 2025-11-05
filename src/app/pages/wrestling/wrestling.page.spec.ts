import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlingPage } from './wrestling.page';

describe('WrestlingPage', () => {
    let component: WrestlingPage;
    let fixture: ComponentFixture<WrestlingPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WrestlingPage]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WrestlingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
