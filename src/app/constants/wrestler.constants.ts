import { Wrestler } from "@models/wrestler.interface";

export const wrestlersRanked: { [key: string]: Wrestler[] } = {
    "Raw": [
        { name: "Bron Breakker", championships: [] },
        { name: "Roxanne Perez", championships: [] },
        { name: "Iyo Sky", championships: [] },
        { name: "Stephanie Vaquer", championships: ["Women's World Championship"] },
        { name: "AJ Styles", championships: ["World Tag Team Championship"] },
        { name: "Dominik Mysterio", championships: ["Intercontinental Championship", "Triple A Mega Championship"] },
        { name: "Asuka", championships: [] },
        { name: "Gunther", championships: [] },
        { name: "Maxxine Dupri", championships: [] },
        { name: "AJ Lee", championships: [] },
        { name: "Becky Lynch", championships: ["Women's Intercontinental Championship"] },
        { name: "Chad Gable", championships: [] },
        { name: "Kairi Sane", championships: [] },
        { name: "Lyra Valkyria", championships: [] },
        { name: "Naomi", championships: [] }

    ],
    "NXT": [
        { name: "Ethan Page", championships: ["NXT North American Championship"] },
        { name: "Sol Ruca", championships: ["WWE Women's Speed Championship"] },
        { name: "Je'Von Evans", championships: [] },
        { name: "Jordynne Grace", championships: [] },
        { name: "Jaida Parker", championships: [] },
        { name: "Tatum Paxley", championships: ["NXT Women's Championship"] },
        { name: "Lola Vice", championships: [] },
        { name: "Lash Legend", championships: [] },
        { name: "Wren Sinclair", championships: [] },
        { name: "Blake Monroe", championships: ["NXT Women's North American Championship"] },
        { name: "Izzi Dame", championships: [] },
        { name: "Jacy Jayne", championships: [] },
        { name: "Trick Williams", championships: [] }

    ],
    "Dynamite": [
        { name: "Willow Nightingale", championships: [] },
        { name: "Will Ospreay", championships: [] },
        { name: "Toni Storm", championships: [] },
        { name: "Jamie Hayter", championships: [] },
        { name: "Mina Shirakawa", championships: [] },
        { name: "Riho", championships: [] }
    ],
    "Impact": [
        { name: "Leon Slater", championships: ["TNA X-Division Championship"] },
        { name: "Jeff Hardy", championships: ["TNA World Tag Team Championship"] },
        { name: "Joe Hendry", championships: [] }
    ],
    "SmackDown": [
        { name: "Bianca Belair", championships: [] },
        { name: "Ilja Dragunov", championships: ["United States Championship"] },
        { name: "Chelsea Green", championships: [] },
        { name: "Nathan Frazer", championships: [] },
        { name: "Drew McIntyre", championships: [] },
        { name: "Randy Orton", championships: [] },
        { name: "Jacob Fatu", championships: [] },
        { name: "R-Truth", championships: [] },
        { name: "Aleister Black", championships: [] }
    ],
};