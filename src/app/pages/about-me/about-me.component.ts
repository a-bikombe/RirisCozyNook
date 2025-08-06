import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew/crew.component';
import { FunFactsService } from '../../services/fun-facts/fun-facts.service';

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

    hasError: boolean = false;
    isLoading: boolean = true;
    funFacts: string[] = [];
    personality: string[] = [
        "MBTI: ISFJ-T",
        "6w5; sp",
        "Sun: Taurus",
        "Moon: Leo",
        "Rising: Virgo"
    ];


    constructor(private renderer: Renderer2, private funFactsService: FunFactsService) { }

    ngOnInit() {
        this.loadFunFacts();
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

    openDialog() {
        const dialog = this.funFactsDialog.nativeElement;
        dialog.showModal();
        this.renderer.addClass(dialog, 'opening');
        setTimeout(() => this.renderer.removeClass(dialog, 'opening'), 300);
        this.renderer.addClass(dialog, 'visible'); // Keep it visible
    }

    onDialogClose() {
        const dialog = this.funFactsDialog.nativeElement;

        // Add closing class for animation if not already present
        if (!dialog.classList.contains('closing')) {
            this.renderer.addClass(dialog, 'closing');
            setTimeout(() => {
                this.renderer.removeClass(dialog, 'closing');
            }, 300); // Match your transition duration
        }

        this.renderer.removeClass(dialog, 'visible');
    }

    closeWithAnimation() {
        const dialog = this.funFactsDialog.nativeElement;

        // Start animation
        this.renderer.removeClass(dialog, 'visible');
        this.renderer.addClass(dialog, 'closing');

        // After animation completes, close dialog and clean up
        setTimeout(() => {
            this.renderer.removeClass(dialog, 'closing');
            dialog.close(); // (close) event fires here
        }, 300); // Match transition duration exactly
    }
}
