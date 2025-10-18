import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistPage } from './playlist.page';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('PlaylistPage', () => {
    let component: PlaylistPage;
    let fixture: ComponentFixture<PlaylistPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PlaylistPage],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PlaylistPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have the correct header', () => {
        expect(component.header).toBe('Welcome to the Playlist!');
    });

    it('should hide loader-spinner after onIframeLoad is called', () => {
        component.onIframeLoad();
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const spinner = compiled.querySelector('loader-spinner-component');
        expect(spinner).toBeNull();
    });

    it('iframe should have correct src and attributes', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const iframe = compiled.querySelector('iframe') as HTMLIFrameElement;
        expect(iframe).toBeTruthy();
        expect(iframe.getAttribute('src')).toContain('open.spotify.com/embed/playlist');
        expect(iframe.getAttribute('height')).toBe('500');
    });

    it('should show loader-spinner when loadingIframe is true', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const spinner = compiled.querySelector('.iframe-spinner') || compiled.querySelector('loader-spinner-component');
        expect(spinner).toBeTruthy();
    });

    it('should remove spinner from DOM after iframe loads', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        // simulate iframe load
        const iframe = compiled.querySelector('iframe') as HTMLIFrameElement;
        expect(iframe).toBeTruthy();
        iframe.dispatchEvent(new Event('load'));
        fixture.detectChanges();
        const spinnerAfter = compiled.querySelector('.iframe-spinner') || compiled.querySelector('loader-spinner-component');
        expect(spinnerAfter).toBeNull();
    });
});