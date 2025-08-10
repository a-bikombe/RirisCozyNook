import { Album } from "../../models/album/album";
import { Movie } from "../../models/movie/movie";
import { Song } from "../../models/song/song";
import { TVShow } from "../../models/tv-show/tv-show";
import { VideoGame } from "../../models/video-game/video-game";

export const songs: Song[] = [
    new Song("Humility", "Gorillaz", "gorillaz_the_now_now.jpg"),
    new Song("Hold In, Hold On", "Kid Bloom", "kid_bloom_hold_in_hold_on.png"),
    new Song("Sunflower, Vol. 6", "Harry Styles", "harry_styles_fine_line.png"),
    new Song("Mulberry Street", "Twenty One Pilots", "twenty_one_pilots_scaled_and_icy.png"),
    new Song("Rocket", "NCT DREAM", "nct_dream_we_boom.png"),
    new Song("Pulling Leaves Off Trees", "Wallows", "wallows_spring.png"),
    new Song("Fine Line", "Harry Styles", "harry_styles_fine_line.png"),
    new Song("Feel Good Inc.", "Gorillaz", "gorillaz_demon_days.png")
];

export const albums: Album[] = [
    new Album("Fine Line", "Harry Styles", "harry_styles_fine_line.png"),
    new Album("The Battle at Garden's Gate", "Greta Van Fleet", "greta_van_fleet_the_battle_at_gardens_gate.png"),
    new Album("Twenty Twenty", "Djo", "djo_twenty_twenty.png"),
    new Album("DECIDE", "Djo", "djo_decide.png"),
    new Album("Harry's House", "Harry Styles", "harry_styles_harrys_house.png"),
    new Album("RENAISSANCE", "Beyoncé", "beyonce_renaissance.png"),
    new Album("X", "THE DRIVER ERA", "the_driver_era_x.png"),
    new Album("Scaled And Icy", "Twenty One Pilots", "twenty_one_pilots_scaled_and_icy.png")
];

export const movies: Movie[] = [
    new Movie("Spider-Man: Far From Home", 2019, "spiderman_ffh.jpg"),
    new Movie("Mulan", 1998, "mulan.jpeg"),
    new Movie("Incredibles", 2004, "incredibles.png"),
    new Movie("Harry Potter and the Prisoner of Azkaban", 2004, "harry_potter_and_the_prisoner_of_azkaban.png"),
    new Movie("Spider-Man Across The Spider-Verse", 2023, "spider_man_across_the_spider_verse.png"),
    new Movie("Shrek 2", 2004, "shrek_2.png"),
    new Movie("Howl's Moving Castle", 2004, "howls_moving_castle.png"),
    new Movie("Luca", 2021, "luca.png"),

];

export const tvShows: TVShow[] = [
    new TVShow("Stranger Things", 2016, 2025, "stranger_things.jpg"),
    new TVShow("Avatar: The Last Airbender", 2005, 2008, "atla.webp"),
    new TVShow("Steven Universe", 2013, 2019, "steven_universe.png"),
    new TVShow("Adventure Time", 2010, 2018, "adventure_time.png"),
    new TVShow("Invincible", 2021, "Present", "invincible.png"),
    new TVShow("My Hero Academia", 2016, "Present", "my_hero_academia.png"),
    new TVShow("Gravity Falls", 2012, 2016, "gravity_falls.png"),
    new TVShow("This Is Us", 2016, 2022, "this_is_us.png")
];

export const videoGames: VideoGame[] = [
    new VideoGame("Coral Island", "Steam Deck", "coral_island.jpg"),
    new VideoGame("The Plucky Squire", "Steam Deck", "the_plucky_squire.jpg"),
    new VideoGame("Loddlenaut", "Steam Deck", "loddlenaut.jpg"),
    new VideoGame("Duck Detective: The Secret Salami", "Steam Deck", "duck_detective_1.jpg"),
    new VideoGame("Kirby and the Forgotten Land", "Nintendo Switch", "kirby_and_the_forgotten_land.jpg"),
    new VideoGame("Baldur's Gate 3", "Steam Deck", "baldurs_gate_3.jpg"),
    new VideoGame("The Sims 4", "Steam Deck", "the_sims_4.jpg"),
    new VideoGame("SimCity", "Windows", "simcity.jpg")
]

export const animals: string[] = [
    "Whale sharks",
    "Whales",
    "Sharks",
    "Dogs",
    "Cats",
    "Rabbits"
];

export const artists: string[] = [
    "Harry Styles",
    "Gorillaz",
    "Wallows",
    "Djo",
    "TXT",
    "Taylor Swift",
    "BTS",
    "Chappell Roan"

]

export const colors: string[] = [
    "Baby pink",
    "Baby blue",
    "Lavender",
    "Black"
];

export const foods: string[] = [
    "Pizza",
    "Fries",
    "Popcorn",
    "Burgers (just patty, with cheese)",
    "Fish",
    "Clam strips",
    "Shrimp",
    "Grilled cheese",
    "Dumplings",
    "Pancakes",
    "Waffles",
    "Bagels",
    "French toast",
    "Toast",
    "Garlic bread"
];

export const snacks: string[] = [
    "Trolli eggs",
    "Peach rings",
    "Kit-Kats",
    "Classic Lays",
    "kettle corn smartfood",
    "Movie Theater Butter smartfood",
    "Pirate's Booty",
    "Funyuns",
    "Cape Cod chips",
    "Fruit punch Arizona",
    "Minute Maid watermelon punch",
    "Salted caramel ice cream",
    "Cotton candy ice cream",
    "Brownie ice cream"
];
