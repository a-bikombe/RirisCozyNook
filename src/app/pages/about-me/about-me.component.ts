import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew/crew.component';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [
        CrewComponent,
        CommonModule
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    @ViewChild('funFactsDialog') funFactsDialog!: ElementRef<HTMLDialogElement>;

    personality: string[] = [
        "MBTI: ISFJ-T",
        "6w5; sp",
        "Sun: Taurus",
        "Moon: Leo",
        "Rising: Virgo"
    ];
    funFacts: string[] = [
        "I have a hilarious, feisty bunny named Milo (aka Mo) who loves to grunt, lunge, and binky, especially at my boyfriend Evan. He’s a Holland Lop / Mini Lop mix and enjoys nibbling on our feet like it’s a sport.",
        "I’m the creator of Riri’s Cozy Nook, a cozy-coded project with Angular, Vercel, and a sprinkle of pastel cuteness.",
        "I once was the editor of a newsletter called “The Flush” in college.",
        "I love watching birds eat from the feeder on my balcony. It literally makes me feel alive. 🌿🐦",
        "I’m a software engineer at Fidelity, and I code with style and precision — even my errors are cute.",
        "I have a mini PC that I use to code, game, and vibe with music — and it handles everything like a tiny beast.",
        "I’m married to Scott in Coral Island and have my own little animal kingdom (chickens, cows, sheep).",
        "I’m in a relationship with Evan, who’s very chill and into video games.",
        "I have intense celebrity crushes.",
        "I drive a brown 2017 Nissan Altima but decorate it with pink accessories to make it cuter; plush mirror covers, bumper stickers, etc.",
        "I like organizing my home with purpose: I’ve got Palm Pals, Lego sets, and smart automation like shortcuts for weather and bunny care.",
        'I planned my bedroom wall display and love making things "just right."'
    ];

    constructor(private renderer: Renderer2) { }

    openDialog() {
        const dialog = this.funFactsDialog.nativeElement;
        dialog.showModal();
        this.renderer.addClass(dialog, 'opening');
        setTimeout(() => this.renderer.removeClass(dialog, 'opening'), 300);
        this.renderer.addClass(dialog, 'visible'); // Keep it visible
    }

    onDialogClose() {
        const dialog = this.funFactsDialog.nativeElement;
        this.renderer.removeClass(dialog, 'visible');
        this.renderer.removeClass(dialog, 'closing');
    }

    closeWithAnimation() {
        const dialog = this.funFactsDialog.nativeElement;
        this.renderer.removeClass(dialog, 'visible'); // Start fade out
        this.renderer.addClass(dialog, 'closing');
        setTimeout(() => dialog.close(), 300); // matches animation duration
    }
}
