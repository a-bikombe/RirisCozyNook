import { VideoGame } from './video-game';

describe('VideoGame', () => {
    it('should create an instance', () => {
        expect(new VideoGame("Coral Island", "Steam Deck", "coral_island.jpg")).toBeTruthy();
    });
});
