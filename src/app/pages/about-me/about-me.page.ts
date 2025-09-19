import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { funFacts, skillsHobbies, personality } from '../../constants/about-me.constants';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './about-me.page.html',
    styleUrl: './about-me.page.scss'
})
export class AboutMePage implements OnInit {
    @ViewChild('aboutMeDialog') aboutMeDialog!: ElementRef<HTMLDialogElement>;

    age: number = new Date(Date.now()).getFullYear() - 2002;
    occupation: string = "Software Engineer";
    hasError: boolean = false;

    ngOnInit() {
        let today = new Date(Date.now());
        if (today.getMonth() <= 5 && today.getDay() < 17) {
            this.age = this.age - 1;
        }
    }
    isLoading: boolean = true;
    funFacts: string[] = funFacts;
    skillsHobbies: string[] = skillsHobbies;
    personality: string[] = personality;
    dialogTitle: string = '';
    dialogItems: string[] = [];

    constructor(private renderer: Renderer2) {}

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