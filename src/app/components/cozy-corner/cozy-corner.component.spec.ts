import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CozyCornerComponent } from './cozy-corner.component';
import { BunnyFactService } from '../../services/bunny-fact/bunny-fact.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CozyCornerComponent', () => {
    let component: CozyCornerComponent;
    let fixture: ComponentFixture<CozyCornerComponent>;
    let bunnyFactServiceSpy: jasmine.SpyObj<BunnyFactService>;

    beforeEach(async () => {
        const spy = jasmine.createSpyObj('BunnyFactService', ['getRandomFact']);

        await TestBed.configureTestingModule({
            imports: [CozyCornerComponent],
            providers: [
                { provide: BunnyFactService, useValue: spy },
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        }).compileComponents();

        bunnyFactServiceSpy = TestBed.inject(BunnyFactService) as jasmine.SpyObj<BunnyFactService>;
        bunnyFactServiceSpy.getRandomFact.and.returnValue(of('Bunnies are adorable!'));

        fixture = TestBed.createComponent(CozyCornerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct header', () => {
        expect(component.header).toBe('Welcome to the Cozy Corner!');
    });

    it('should call getRandomFact on BunnyFactService', () => {
        expect(bunnyFactServiceSpy.getRandomFact).toHaveBeenCalled();
    });

    it('should set fact from the service', () => {
        expect(component.fact).toBe('Bunnies are adorable!');
    });

    it('should render header in the template', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Welcome to the Cozy Corner!');
    });
});