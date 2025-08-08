export class TVShow {
    constructor(
        public title: string,
        public startYear: number,
        public endYear: number,
        public cover: string,
        public isFavorite: boolean = false
    ) { }
}

export const tvShows: TVShow[] = [
    new TVShow("Stranger Things", 2016, 2025, "stranger_things.jpg", true)
];
