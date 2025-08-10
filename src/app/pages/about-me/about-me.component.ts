import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew/crew.component';
import { funFacts, skillsHobbies, personality } from './about-me.constants';

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
    @ViewChild('aboutMeDialog') aboutMeDialog!: ElementRef<HTMLDialogElement>;

    hasError: boolean = false;
    isLoading: boolean = true;
    funFacts: string[] = funFacts;
    skillsHobbies: string[] = skillsHobbies;
    personality: string[] = personality;

    dialogTitle: string = '';
    dialogItems: string[] = [];

    constructor(private renderer: Renderer2) { }

    openDialog(title: string, items: string[]) {
        this.dialogTitle = `My ${title}!`;
        this.dialogItems = items;

        let dialog = this.aboutMeDialog.nativeElement;

        dialog.showModal();
        this.renderer.addClass(dialog, 'opening');
        setTimeout(() => this.renderer.removeClass(dialog, 'opening'), 300);
        this.renderer.addClass(dialog, 'visible');
    }

    closeWithAnimation() {
        let dialog = this.aboutMeDialog.nativeElement;;

        this.renderer.removeClass(dialog, 'visible');
        this.renderer.addClass(dialog, 'closing');

        setTimeout(() => {
            this.renderer.removeClass(dialog, 'closing');
            dialog.close();
        }, 300);
    }

    onDialogClose() {
        this.dialogTitle = '';
        this.dialogItems = [];
        let dialog = this.aboutMeDialog.nativeElement;;

        // Add closing class for animation if not already present
        if (!dialog.classList.contains('closing')) {
            this.renderer.addClass(dialog, 'closing');
            setTimeout(() => {
                this.renderer.removeClass(dialog, 'closing');
            }, 300);
        }
    }
}
