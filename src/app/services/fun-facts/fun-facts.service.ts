import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FunFact } from "../../models/fun-fact/fun-fact";

@Injectable({ providedIn: 'root' })
export class FunFactsService {
    private funFacts: FunFact[] = [
        new FunFact("I have a hilarious, feisty bunny named Milo (aka Mo) who loves to grunt, lunge, and binky, especially at my boyfriend Evan. He's a Holland Lop / Mini Lop mix and enjoys nibbling on our feet like it's a sport."),
        new FunFact("I'm the creator of Riri's Cozy Nook, a cozy-coded project with Angular, Vercel, and a sprinkle of pastel cuteness."),
        new FunFact("I once was the editor of a newsletter called “The Flush” in college."),
        new FunFact("I love watching birds eat from the feeder on my balcony. It literally makes me feel alive. 🌿🐦"),
        new FunFact("I'm a software engineer at Fidelity, and I code with style and precision — even my errors are cute."),
        new FunFact("I have a mini PC that I use to code, game, and vibe with music — and it handles everything like a tiny beast."),
        new FunFact("I'm married to Scott in Coral Island and have my own little animal kingdom (chickens, cows, sheep)."),
        new FunFact("I'm in a relationship with Evan, who's very chill and into video games."),
        new FunFact("I have intense celebrity crushes."),
        new FunFact("I drive a brown 2017 Nissan Altima but decorate it with pink accessories to make it cuter; plush mirror covers, bumper stickers, etc."),
        new FunFact("I like organizing my home with purpose: I've got Palm Pals, Lego sets, and smart automation like shortcuts for weather and bunny care."),
        new FunFact('I planned my bedroom wall display and love making things "just right."')
    ];

    constructor() { }

    getFunFacts(): Observable<FunFact[]> {
        return of(this.funFacts); // simulates HTTP GET
    }
}
