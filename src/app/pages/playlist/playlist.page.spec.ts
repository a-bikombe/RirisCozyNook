import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistPage } from './playlist.page';
import { BunnyFactService } from '../../services/bunny-fact/bunny-fact.service';
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

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct header', () => {
        expect(component.header).toBe('Welcome to the Playlist!');
    });

    it('should render header in the template', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Welcome to the Playlist!');
    });
});