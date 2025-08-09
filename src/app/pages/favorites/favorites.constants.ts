import { Album } from "../../models/album/album";
import { Movie } from "../../models/movie/movie";
import { Song } from "../../models/song/song";
import { TVShow } from "../../models/tv-show/tv-show";
import { VideoGame } from "../../models/video-game/video-game";

export const songs: Song[] = [
    new Song("Humility", "Gorillaz", "gorillaz_the_now_now.jpg"),
    new Song("Hold In, Hold On", "Kid Bloom", "kid_bloom_hold_in_hold_on.png"),
    new Song("Link", "Djo", "djo_the_crux.png"),
    new Song("Sunflower, Vol. 6", "Harry Styles", "harry_styles_fine_line.png"),
    new Song("Blu", "Jon Bellion", "jon_bellion_glory_sound_prep.png"),
    new Song("Fine Line", "Harry Styles", "harry_styles_fine_line.png"),
    new Song("Telepathy", "BTS", "bts_be.png")
];

export const albums: Album[] = [
    new Album("Fine Line", "Harry Styles", "harry_styles_fine_line.png"),
    new Album("Demon Days", "Gorillaz", "gorillaz_demon_days.png"),
    new Album("DECIDE", "Djo", "djo_decide.png")
];

export const movies: Movie[] = [
    new Movie("Spider-Man: Far From Home", 2019, "spiderman_ffh.jpg"),
    new Movie("Mulan", 1998, "mulan.jpeg")
];

export const tvShows: TVShow[] = [
    new TVShow("Stranger Things", 2016, 2025, "stranger_things.jpg"),
    new TVShow("Avatar: The Last Airbender", 2005, 2008, "atla.webp")
];

export const videoGames: VideoGame[] = [
    new VideoGame("Coral Island", "Steam Deck", "coral_island.jpg"),
    new VideoGame("Kirby and the Forgotten Land", "Nintendo Switch", "kirby_and_the_forgotten_land.jpg")
]

export const animals: string[] = [
    "whale sharks",
    "whales",
    "sharks"
];

export const artists: string[] = [
    "Harry Styles",
    "Gorillaz",
    "Wallows",
    "Djo",
    "TXT"
]

export const colors: string[] = [
    "baby blue",
    "purple"
];

export const foods: string[] = [
    "pizza",
    "fries",
    "popcorn",
    "burgers (just patty, with cheese)",
    "fish",
    "clam strips",
    "shrimp",
    "grilled cheese",
    "dumplings",
    "pancakes",
    "waffles",
    "bagels",
    "french toast",
    "toast",
    "garlic bread"
];

export const snacks: string[] = [
    "Trolli eggs",
    "Peach rings",
    "Kitkats",
    "classic Lays",
    "kettle corn smartfood",
    "movie theater butter smartfood",
    "Pirate's Booty",
    "Funyuns",
    "Cape Cod chips",
    "fruit punch arizona",
    "minute maid watermelon punch",
    "salted caramel ice cream",
    "cotton candy ice cream",
    "brownie ice cream"
];
