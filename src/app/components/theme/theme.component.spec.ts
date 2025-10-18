import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeComponent } from './theme.component';
import { ThemeService } from '@services/theme/theme.service';
import { By } from '@angular/platform-browser';

const mockThemeService = {
    isDark: jasmine.createSpy('isDark').and.returnValue(false),
    toggle: jasmine.createSpy('toggle')
};

describe('ThemeComponent', () => {
    let component: ThemeComponent;
    let fixture: ComponentFixture<ThemeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeComponent],
            providers: [{ provide: ThemeService, useValue: mockThemeService }]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ThemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('toggle should call theme.toggle', () => {
        component.toggle();
        expect(mockThemeService.toggle).toHaveBeenCalled();
    });

    it('should render sun icon when not dark and moon icon when dark', () => {
        // initially mockThemeService.isDark() returns false
        fixture.detectChanges();
        let span = fixture.debugElement.query(By.css('button.theme-toggle span'));
        expect(span.nativeElement.textContent.trim()).toBe('🌞');

        // change mock to return true and refresh
        (mockThemeService.isDark as jasmine.Spy).and.returnValue(true);
        fixture.detectChanges();
        span = fixture.debugElement.query(By.css('button.theme-toggle span'));
        expect(span.nativeElement.textContent.trim()).toBe('🌙');
    });
});
