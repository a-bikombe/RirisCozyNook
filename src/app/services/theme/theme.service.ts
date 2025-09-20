import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private renderer: Renderer2;
    private darkClass = 'dark';
    private storageKey = 'theme';

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.loadTheme(); // apply stored theme on startup
    }

    enableDark() {
        this.renderer.addClass(document.body, this.darkClass);
        localStorage.setItem(this.storageKey, 'dark');
    }

    disableDark() {
        this.renderer.removeClass(document.body, this.darkClass);
        localStorage.setItem(this.storageKey, 'light');
    }

    toggle() {
        if (this.isDark()) {
            this.disableDark();
        } else {
            this.enableDark();
        }
    }

    isDark(): boolean {
        return document.body.classList.contains(this.darkClass);
    }

    private loadTheme() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored === 'dark') {
            this.enableDark();
        } else {
            this.disableDark();
        }
    }
}