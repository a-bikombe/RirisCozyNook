import { NavigationItem } from './navigation-item';

describe('NavigationItem', () => {
    it('should create an instance with given path and label', () => {
        const path = '/home';
        const label = 'Home';
        const url = new NavigationItem(path, label);

        expect(url).toBeTruthy();
        expect(url.path).toBe(path);
        expect(url.label).toBe(label);
    });
});
