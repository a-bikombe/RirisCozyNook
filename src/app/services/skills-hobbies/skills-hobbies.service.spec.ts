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
            expect(typeof items[0]).toBe('SkillHobby');
            done();
        });
    });
});
