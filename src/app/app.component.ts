import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationItem } from '@models/navigation-item.interface';
import { DatePipe } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NavbarComponent } from '@components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, DatePipe, ClipboardModule, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title: string = "Riri's Cozy Nook";
    footerText: string = "Copyright " + this.title + " —";
    currentDate: Date = new Date();

    
}