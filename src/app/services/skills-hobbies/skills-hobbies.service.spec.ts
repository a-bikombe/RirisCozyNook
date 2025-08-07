import { TestBed } from '@angular/core/testing';
import { SkillsHobbiesService } from './skills-hobbies.service';

describe('SkillsHobbiesService', () => {
    let service: SkillsHobbiesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SkillsHobbiesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an observable of skills and hobbies', (done) => {
        service.getSkillsHobbies().subscribe((items) => {
            expect(Array.isArray(items)).toBeTrue();
            expect(items.length).toBeGreaterThan(0);
            expect(typeof items[0]).toBe('string');
            done();
        });
    });

    it('should contain a skill about Angular', (done) => {
        service.getSkillsHobbies().subscribe((items) => {
            const hasAngular = items.some(item => item.toLowerCase().includes('angular'));
            expect(hasAngular).toBeTrue();
            done();
        });
    });

    it('should contain a hobby about baking bread', (done) => {
        service.getSkillsHobbies().subscribe((items) => {
            const hasBaking = items.some(item => item.toLowerCase().includes('baking bread'));
            expect(hasBaking).toBeTrue();
            done();
        });
    });
});
