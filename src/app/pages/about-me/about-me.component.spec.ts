import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component } from '@angular/core';

@Component({
    selector: 'app-crew',
    template: ''
})
class MockCrewComponent { }

describe('AboutMeComponent', () => {
    let component: AboutMeComponent;
    let fixture: ComponentFixture<AboutMeComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutMeComponent, MockCrewComponent],
            providers: [provideHttpClient(), provideHttpClientTesting()]
        }).compileComponents();

        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render header image and intro text', () => {
        const img = compiled.querySelector('header img');
        const h2 = compiled.querySelector('header h2');
        expect(img?.getAttribute('src')).toBe('images/arianna_about_me.png');
        expect(h2?.textContent).toContain('I like music');
    });

    it('should display personality traits', () => {
        component.personality = ['Creative', 'Empathetic', 'Curious'];
        fixture.detectChanges();

        const items = compiled.querySelectorAll('main ul li');
        expect(items.length).toBe(3);
        expect(items[0].textContent).toBe('Creative');
        expect(items[1].textContent).toBe('Empathetic');
        expect(items[2].textContent).toBe('Curious');
    });

    it('should show fun facts dialog when openDialog is called', () => {
        const funDialog = compiled.querySelector('dialog.dialog') as HTMLDialogElement;
        spyOn(funDialog, 'showModal');
        component.openDialog('funFacts');
        expect(funDialog.showModal).toHaveBeenCalled();
    });

    it('should show skills and hobbies dialog when openDialog is called', () => {
        const skillsDialog = compiled.querySelectorAll('dialog.dialog')[1] as HTMLDialogElement;
        spyOn(skillsDialog, 'showModal');
        component.openDialog('skillsHobbies');
        expect(skillsDialog.showModal).toHaveBeenCalled();
    });

    it('should render fun facts when present', () => {
        component.funFacts = ['I love bunnies', 'I collect cute stationery'];
        fixture.detectChanges();

        const funFactItems = compiled.querySelectorAll('dialog ul.list li');
        expect(funFactItems.length).toBeGreaterThanOrEqual(2);
        expect(funFactItems[0].textContent).toContain('I love bunnies');
        expect(funFactItems[1].textContent).toContain('I collect cute stationery');
    });

    it('should render skills and hobbies when present', () => {
        component.skillsHobbies = ['Coding', 'Baking', 'Writing'];
        fixture.detectChanges();

        const skillsDialog = compiled.querySelectorAll('dialog')[1];
        const skillsItems = skillsDialog.querySelectorAll('ul.list li');
        expect(skillsItems.length).toBe(3);
        expect(skillsItems[0].textContent).toContain('Coding');
        expect(skillsItems[1].textContent).toContain('Baking');
        expect(skillsItems[2].textContent).toContain('Writing');
    });
});
