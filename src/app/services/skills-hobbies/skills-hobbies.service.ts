import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SkillHobby } from '../../models/skill-hobby/skill-hobby';

@Injectable({
    providedIn: 'root'
})
export class SkillsHobbiesService {
    private skillsHobbies: SkillHobby[] = [
        new SkillHobby("Angular is literally my coding love language 👑"),
        new SkillHobby("Full-stack app queen—structure? I serve it, front *and* back."),
        new SkillHobby("API wrangling like a digital cowboy 🤠 yeehaw"),
        new SkillHobby("Git + GitHub? Please. I commit like a champ."),
        new SkillHobby("Vercel is basically my playground at this point."),
        new SkillHobby("Debugging under pressure? I'm a licensed coding therapist, babe."),
        new SkillHobby("I design in pastels and cozy-core vibes—soft, playful, *click me* energy."),
        new SkillHobby("Wireframes? Yeah, I make those look like art school final projects."),
        new SkillHobby("If it's not ✨clean✨ and polished, I'm not done yet."),
        new SkillHobby("Digital routines, Notion dashboards, shortcut magic—I'm Type A but adorable."),
        new SkillHobby("To-do lists? Slayed. Dishwashers? Feared me."),
        new SkillHobby("I troubleshoot tech bugs, printer tantrums, and my own schedule—no notes."),
        new SkillHobby("Designed my entire life around spoonie-friendly energy workarounds 🥄"),
        new SkillHobby("Coral Island royalty—Scott is mine, the ocean is home."),
        new SkillHobby("The Sims, Little Kitty Big City, RimWorld, Detroit: Become Human—gimme cozy, immersive, and a lil ✨spice✨"),
        new SkillHobby("I crochet like a WiFi-enabled cottagecore grandma."),
        new SkillHobby("I write fantasy that's immersive and *accidentally ASMR*."),
        new SkillHobby("Baking bread is my emotional support activity."),
        new SkillHobby("My car? A kawaii fortress on wheels."),
        new SkillHobby("Milo's vibe is the blueprint. He *is* the moment."),
        new SkillHobby("Pink and pastel everything—even when the base is brown. (We don't judge her 💀)"),
        new SkillHobby("I watch my bird cam with my *entire soul*."),
        new SkillHobby("Journaling = daily love letters to future me."),
        new SkillHobby("Gentle rhythms and chill quests keep me grounded and glowing 💫")
    ];

    constructor() { }

    getSkillsHobbies(): Observable<SkillHobby[]> {
        return of(this.skillsHobbies); // simulates HTTP GET
    }
}
