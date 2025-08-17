import { VideoGame } from './video-game';

describe('VideoGame', () => {
    it('should create an instance with given properties', () => {
        const game = new VideoGame('The Legend of Zelda', 'Switch', 'zelda.jpg');
        expect(game).toBeTruthy();
        expect(game.title).toBe('The Legend of Zelda');
        expect(game.platform).toBe('Switch');
        expect(game.cover).toBe('zelda.jpg');
    });

    it('should allow different values for properties', () => {
        const game = new VideoGame('Halo', 'Xbox', 'halo.jpg');
        expect(game.title).toBe('Halo');
        expect(game.platform).toBe('Xbox');
        expect(game.cover).toBe('halo.jpg');
    });

    it('should handle empty strings as values', () => {
        const game = new VideoGame('', '', '');
        expect(game.title).toBe('');
        expect(game.platform).toBe('');
        expect(game.cover).toBe('');
    });

    it('should handle null and undefined values', () => {
        // @ts-expect-error Testing with null/undefined
        const game = new VideoGame(null, undefined, null);
        expect(game.title).toBeNull();
        expect(game.platform).toBeUndefined();
        expect(game.cover).toBeNull();
    });
});