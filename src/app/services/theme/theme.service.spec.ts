import { TestBed } from '@angular/core/testing';
import { Renderer2, RendererFactory2 } from '@angular/core';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
    let service: ThemeService;
    const storageKey = 'theme';

    // simple renderer that delegates to DOM classList so isDark() works
    const fakeRenderer: Partial<Renderer2> = {
        addClass: (el: any, cls: string) => el?.classList?.add(cls),
        removeClass: (el: any, cls: string) => el?.classList?.remove(cls),
    };

    const fakeFactory: Partial<RendererFactory2> = {
        createRenderer: (_: any, __: any) => (fakeRenderer as Renderer2)
    };

    beforeEach(() => {
        // ensure clean DOM and storage
        document.body.className = '';
        localStorage.removeItem(storageKey);

        TestBed.configureTestingModule({
            providers: [
                { provide: RendererFactory2, useValue: fakeFactory }
            ]
        });
        service = TestBed.inject(ThemeService);
    });

    afterEach(() => {
        // cleanup
        document.body.className = '';
        localStorage.removeItem(storageKey);
    });

    it('enableDark should add class on body and set localStorage', () => {
        service.enableDark();
        expect(document.body.classList.contains('dark')).toBeTrue();
        expect(localStorage.getItem(storageKey)).toBe('dark');
    });

    it('disableDark should remove class from body and set localStorage', () => {
        // start with dark enabled
        document.body.classList.add('dark');
        service.disableDark();
        expect(document.body.classList.contains('dark')).toBeFalse();
        expect(localStorage.getItem(storageKey)).toBe('light');
    });

    it('toggle should flip the theme', () => {
        // initially not dark
        service.toggle();
        expect(document.body.classList.contains('dark')).toBeTrue();
        expect(localStorage.getItem(storageKey)).toBe('dark');

        service.toggle();
        expect(document.body.classList.contains('dark')).toBeFalse();
        expect(localStorage.getItem(storageKey)).toBe('light');
    });
});