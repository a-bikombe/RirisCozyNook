import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '@services/theme/theme.service';

@Component({
    selector: 'theme-component',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
    constructor(public theme: ThemeService) { }

    toggle() {
        this.theme.toggle();
    }

    get isDark(): boolean {
        return this.theme.isDark();
    }
}