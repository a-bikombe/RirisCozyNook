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
});
