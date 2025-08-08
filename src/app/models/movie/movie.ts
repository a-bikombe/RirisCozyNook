export class Movie {
    constructor(
        public title: string,
        public year: number,
        public cover: string,
        public isFavorite: boolean = false
    ) { }
}
