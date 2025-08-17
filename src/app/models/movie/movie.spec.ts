import { Movie } from './movie';

describe('Movie', () => {
    it('should create an instance with given properties', () => {
        const movie = new Movie('Inception', 2010, 'inception.jpg');
        expect(movie.title).toBe('Inception');
        expect(movie.year).toBe(2010);
        expect(movie.cover).toBe('inception.jpg');
    });

    it('should allow different types of movies', () => {
        const movie = new Movie('The Matrix', 1999, 'matrix.jpg');
        expect(movie.title).toBe('The Matrix');
        expect(movie.year).toBe(1999);
        expect(movie.cover).toBe('matrix.jpg');
    });

    it('should handle empty strings and zero year', () => {
        const movie = new Movie('', 0, '');
        expect(movie.title).toBe('');
        expect(movie.year).toBe(0);
        expect(movie.cover).toBe('');
    });

    it('should update properties after creation', () => {
        const movie = new Movie('Old Title', 2000, 'old.jpg');
        movie.title = 'New Title';
        movie.year = 2024;
        movie.cover = 'new.jpg';
        expect(movie.title).toBe('New Title');
        expect(movie.year).toBe(2024);
        expect(movie.cover).toBe('new.jpg');
    });
});