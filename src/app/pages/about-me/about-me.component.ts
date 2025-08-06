import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew/crew.component';
import { FunFactsService } from '../../services/fun-facts/fun-facts.service';
import { SkillsHobbiesService } from '../../services/skills-hobbies/skills-hobbies.service';

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
export class AboutMeComponent implements OnInit {
    @ViewChild('funFactsDialog') funFactsDialog!: ElementRef<HTMLDialogElement>;
    @ViewChild('skillsHobbiesDialog') skillsHobbiesDialog!: ElementRef<HTMLDialogElement>;

    hasError: boolean = false;
    isLoading: boolean = true;
    funFacts: string[] = [];
    skillsHobbies: string[] = [];
    personality: string[] = [
        "MBTI: ISFJ-T",
        "6w5; sp",
        "Sun: Taurus",
        "Moon: Leo",
        "Rising: Virgo"
    ];

    constructor(private renderer: Renderer2, private funFactsService: FunFactsService, private skillsHobbiesService: SkillsHobbiesService) { }

    ngOnInit() {
        this.loadFunFacts();
        this.loadSkillsHobbies();
    }

    loadFunFacts() {
        this.funFactsService.getFunFacts().subscribe({
            next: (data) => {
                this.funFacts = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error(err);
                this.hasError = true;
                this.isLoading = false;
            }
        });
    }

    loadSkillsHobbies() {
        this.skillsHobbiesService.getSkillsHobbies().subscribe({
            next: (data) => {
                this.skillsHobbies = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error(err);
                this.hasError = true;
                this.isLoading = false;
            }
        });
    }

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
