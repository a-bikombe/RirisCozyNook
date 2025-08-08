import { Music } from "../music";

export class Song extends Music {
    constructor(title: string, artist: string) {
        super(title, artist);
    }
}
