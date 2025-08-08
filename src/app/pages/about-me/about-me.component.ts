import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew/crew.component';
import { funFacts } from '../../constants/about-me/fun-facts.constants';
import { skillsHobbies } from '../../constants/about-me/skills-hobbies.constants';
import { personality } from '../../constants/about-me/personality.constants';

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
    @ViewChild('skillsHobbiesDialog') skillsHobbiesDialog!: ElementRef<HTMLDialogElement>;

    hasError: boolean = false;
    isLoading: boolean = true;
    funFacts: string[] = funFacts;
    skillsHobbies: string[] = skillsHobbies;
    personality: string[] = personality;

    constructor(private renderer: Renderer2) { }

    openDialog(dialogToOpen: string) {
        let dialog = this.funFactsDialog.nativeElement;;

        if (dialogToOpen == 'skillsHobbies') {
            dialog = this.skillsHobbiesDialog.nativeElement;
        }

        dialog.showModal();
        this.renderer.addClass(dialog, 'opening');
        setTimeout(() => this.renderer.removeClass(dialog, 'opening'), 300);
        this.renderer.addClass(dialog, 'visible');
    }

    onDialogClose(closingDialog: string) {
        let dialog = this.funFactsDialog.nativeElement;;

        if (closingDialog == 'skillsHobbies') {
            dialog = this.skillsHobbiesDialog.nativeElement;
        }

        // Add closing class for animation if not already present
        if (!dialog.classList.contains('closing')) {
            this.renderer.addClass(dialog, 'closing');
            setTimeout(() => {
                this.renderer.removeClass(dialog, 'closing');
            }, 300);
        }

        this.renderer.removeClass(dialog, 'visible');
    }

    closeWithAnimation(dialogToClose: string) {
        let dialog = this.funFactsDialog.nativeElement;;

        if (dialogToClose == 'skillsHobbies') {
            dialog = this.skillsHobbiesDialog.nativeElement;
        }

        this.renderer.removeClass(dialog, 'visible');
        this.renderer.addClass(dialog, 'closing');

        setTimeout(() => {
            this.renderer.removeClass(dialog, 'closing');
            dialog.close();
        }, 300);
    }
}
