export class Movie {
    constructor(
        public title: string,
        public year: number,
        public cover: string,
        public isFavorite: boolean = false
    ) { }
}

export const movies: Movie[] = [
    new Movie("Spider-Man: Far From Home", 2019, "spiderman_ffh.jpg", true)
];
