import { NavUrl } from './nav-url';

describe('NavUrl', () => {
    it('should create an instance with given path and label', () => {
        const path = '/home';
        const label = 'Home';
        const navUrl = new NavUrl(path, label);

        expect(navUrl).toBeTruthy();
        expect(navUrl.path).toBe(path);
        expect(navUrl.label).toBe(label);
    });
});
