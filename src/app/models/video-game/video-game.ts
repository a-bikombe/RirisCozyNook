export class VideoGame {
    constructor(
        public title: string,
        public platform: string,
        public cover: string,
        public isFavorite: boolean = false
    ) { }
}
