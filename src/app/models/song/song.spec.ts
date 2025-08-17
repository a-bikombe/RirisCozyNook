import { Song } from './song';

describe('Song', () => {
    it('should create an instance with given properties', () => {
        const song = new Song('Imagine', 'John Lennon', 'cover.jpg');
        expect(song.title).toBe('Imagine');
        expect(song.artist).toBe('John Lennon');
        expect(song.cover).toBe('cover.jpg');
    });

    it('should allow updating properties', () => {
        const song = new Song('Hey Jude', 'The Beatles', 'heyjude.jpg');
        song.title = 'Let It Be';
        song.artist = 'Paul McCartney';
        song.cover = 'letitbe.jpg';
        expect(song.title).toBe('Let It Be');
        expect(song.artist).toBe('Paul McCartney');
        expect(song.cover).toBe('letitbe.jpg');
    });

    it('should be instance of Song', () => {
        const song = new Song('Bohemian Rhapsody', 'Queen', 'bohemian.jpg');
        expect(song instanceof Song).toBeTrue();
    });
});