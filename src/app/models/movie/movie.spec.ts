import { Movie } from './movie';

describe('Movie', () => {
    it('should create an instance', () => {
        expect(new Movie("Spider-Man: Far From Home", 2019, "spiderman_ffh.jpg")).toBeTruthy();
    });
});
