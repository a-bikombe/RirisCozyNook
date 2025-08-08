import { Music } from "../music";

export class Album extends Music {
    constructor(title: string, artist: string) {
        super(title, artist);
    }
}
