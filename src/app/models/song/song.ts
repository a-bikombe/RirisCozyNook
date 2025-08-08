import { Music } from "../../interfaces/music.interface";

export class Song implements Music {
	constructor(
		public title: string,
		public artist: string,
        public cover: string,
        public isFavorite: boolean = false
	) { }
}

export const songs: Song[] = [
    new Song("Humility", "Gorillaz", "gorillaz_the_now_now.jpg", true),
    new Song("Sunflower, Vol. 6", "Harry Styles", "harry_styles_fine_line.png"),
    new Song("Blu", "Jon Bellion", "jon_bellion_glory_sound_prep.png"),
    new Song("Fine Line", "Harry Styles", "harry_styles_fine_line.png"),
    new Song("Telepathy", "BTS", "bts_be.png")
];
