import { Music } from "../../interfaces/music.interface";

export class Album implements Music {
    constructor(
        public title: string,
        public artist: string,
        public cover: string,
        public isFavorite: boolean = false
    ) { }
}
