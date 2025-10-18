import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BunnyFactsPage } from './bunny-facts.page';
import { BunnyFactService } from '@services/bunny-fact/bunny-fact.service';
import { FavoriteService } from '@services/favorite/favorite.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

// Minimal BunnyFact shape for tests
const MOCK_FACTS = [
    { id: 1, fact: 'Bunnies love carrots' },
    { id: 2, fact: 'Bunnies can jump high' }
] as any;

const mockBunnyService = {
    random: jasmine.createSpy('random').and.returnValue(of(MOCK_FACTS[0])),
    all: jasmine.createSpy('all').and.returnValue(of(MOCK_FACTS))
};

const mockFavoriteService = {
    all: jasmine.createSpy('all').and.returnValue([1]),
    isFavorited: jasmine.createSpy('isFavorited').and.callFake((id: number) => id === 1),
    toggle: jasmine.createSpy('toggle').and.callFake(() => {})
};

describe('BunnyFactsPage', () => {
    let component: BunnyFactsPage;
    let fixture: ComponentFixture<BunnyFactsPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BunnyFactsPage],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                { provide: BunnyFactService, useValue: mockBunnyService },
                { provide: FavoriteService, useValue: mockFavoriteService }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BunnyFactsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render the title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h2')?.textContent).toContain('Fun Facts About Bunnies!');
    });

    it('should show loader when no fact is present initially', () => {
        // we instantiate component with mocked services; ngOnInit triggers reload -> sets fact
        // to simulate loader when fact is null, temporarily clear fact and detect
        component.fact = null;
        component.loading = true;
        fixture.detectChanges();
        const loader = fixture.nativeElement.querySelector('loader-dot-component');
        expect(loader).toBeTruthy();
    });

    it('reload should populate fact and facts list from services', () => {
        component.reload();
        fixture.detectChanges();
        expect(component.fact).toEqual(MOCK_FACTS[0]);
        // facts are filtered by favorite ids [1]
        expect(component.facts.length).toBe(1);
        expect(component.facts[0].id).toBe(1);
    });

    it('onCopy(true) should set copied to true', () => {
        component.copied = false;
        component.onCopy(true);
        expect(component.copied).toBeTrue();
    });

    it('toggleFavorite should call favorite.toggle and reload', () => {
        spyOn(component, 'reload').and.callThrough();
        component.fact = MOCK_FACTS[0];
        component.toggleFavorite();
        expect(mockFavoriteService.toggle).toHaveBeenCalledWith(1);
        // favorited is set via mock isFavorited
        expect(component.favorited).toBeTrue();
        expect(component.reload).toHaveBeenCalled();
    });

    it('showFavorites should return only favorited facts', () => {
        component.facts = MOCK_FACTS as any;
        const shown = component.showFavorites();
        expect(shown.length).toBe(1);
        expect(shown[0].id).toBe(1);
    });
});