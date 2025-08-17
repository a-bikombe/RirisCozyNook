import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'cozy-corner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cozy-corner.component.html',
    styleUrl: './cozy-corner.component.scss'
})

export class CozyCornerComponent {
    header: string = 'Welcome to the Cozy Corner!';
    placeholderParagraph: string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit.Quisque faucibus ex sapien vitae pellentesque sem placerat.In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.Pulvinar vivamus fringilla lacus nec metus bibendum egestas.Iaculis massa nisl malesuada lacinia integer nunc posuere.Ut hendrerit semper vel class aptent taciti sociosqu.Ad litora torquent per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam urna tempor.';
    repeatCount: number = 3;
}
