export class TVShow {
    constructor(
        public title: string,
        public startYear: number,
        public endYear: number | "Present",
        public cover: string
    ) { }
}
