import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
    let service: FavoriteService;

    beforeEach(() => {
        // ensure localStorage is clean for each test
        localStorage.removeItem('favoriteFactIds');
        TestBed.configureTestingModule({});
        service = TestBed.inject(FavoriteService);
    });

    afterEach(() => {
        localStorage.removeItem('favoriteFactIds');
    });

    it('should favorite and unfavorite ids', () => {
        service.favorite(5);
        expect(service.isFavorited(5)).toBeTrue();
        service.unfavorite(5);
        expect(service.isFavorited(5)).toBeFalse();
    });

    it('toggle should add then remove', () => {
        service.toggle(7);
        expect(service.isFavorited(7)).toBeTrue();
        service.toggle(7);
        expect(service.isFavorited(7)).toBeFalse();
    });

    it('all should return an array of ids', () => {
        service.favorite(1);
        service.favorite(2);
        const all = service.all();
        expect(Array.isArray(all)).toBeTrue();
        expect(all.sort()).toEqual([1, 2]);
    });

    it('clear should remove all favorites and persist', () => {
        service.favorite(3);
        expect(service.isFavorited(3)).toBeTrue();
        service.clear();
        expect(service.all().length).toBe(0);
        expect(localStorage.getItem('favoriteFactIds')).toBe(JSON.stringify([]));
    });
});
