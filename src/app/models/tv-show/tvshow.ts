export class TVShow {
    constructor(
        public title: string,
        public startYear: number,
        public endYear: number,
        public cover: string,
        public isFavorite: boolean = false
    ) { }
}
