import { NavUrl } from './nav-url';

describe('NavUrl', () => {
    it('should create an instance with given path and label', () => {
        const nav = new NavUrl('/home', 'Home');

        expect(nav).toBeTruthy();
        expect(nav.path).toBe('/home');
        expect(nav.label).toBe('Home');
    });
});
