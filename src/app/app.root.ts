import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ThemeService } from '@services/theme/theme.service';
import { ThemeComponent } from "@components/theme/theme.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, DatePipe, ClipboardModule, NavbarComponent, ThemeComponent],
    templateUrl: './app.root.html',
    styleUrl: './app.root.scss'
})

export class AppRoot {
    title: string = "Riri's Cozy Nook";
    footerText: string = "Copyright " + this.title + " —";
    currentDate: Date = new Date();
}