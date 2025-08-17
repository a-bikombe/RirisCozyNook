import { Album } from './album';

describe('Album', () => {
    it('should create an instance with given properties', () => {
        const album = new Album('Test Title', 'Test Artist', 'test-cover.jpg');
        expect(album).toBeTruthy();
        expect(album.title).toBe('Test Title');
        expect(album.artist).toBe('Test Artist');
        expect(album.cover).toBe('test-cover.jpg');
    });

    it('should allow updating properties after creation', () => {
        const album = new Album('Old Title', 'Old Artist', 'old-cover.jpg');
        album.title = 'New Title';
        album.artist = 'New Artist';
        album.cover = 'new-cover.jpg';
        expect(album.title).toBe('New Title');
        expect(album.artist).toBe('New Artist');
        expect(album.cover).toBe('new-cover.jpg');
    });

    it('should handle empty strings as properties', () => {
        const album = new Album('', '', '');
        expect(album.title).toBe('');
        expect(album.artist).toBe('');
        expect(album.cover).toBe('');
    });
});