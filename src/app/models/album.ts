import { Music } from "@models/music.interface";

export class Album implements Music {
    constructor(
        public title: string,
        public artist: string,
        public cover: string
    ) { }
}