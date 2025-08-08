export class VideoGame {
    constructor(
        public title: string,
        public platform: string,
        public cover: string,
        public isFavorite: boolean = false
    ) { }
}

export const videoGames: VideoGame[] = [
    new VideoGame("Coral Island", "Steam Deck", "coral_island.jpg", true)
]
