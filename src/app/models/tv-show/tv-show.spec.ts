import { TVShow } from './tv-show';

describe('TVShow', () => {
    it('should create an instance with all properties', () => {
        const show = new TVShow('Friends', 1994, 2004, 'friends.jpg');
        expect(show.title).toBe('Friends');
        expect(show.startYear).toBe(1994);
        expect(show.endYear).toBe(2004);
        expect(show.cover).toBe('friends.jpg');
    });

    it('should allow endYear to be "Present"', () => {
        const show = new TVShow('Stranger Things', 2016, 'Present', 'stranger-things.jpg');
        expect(show.endYear).toBe('Present');
    });

    it('should handle different types for endYear', () => {
        const show1 = new TVShow('Breaking Bad', 2008, 2013, 'breaking-bad.jpg');
        const show2 = new TVShow('The Simpsons', 1989, 'Present', 'simpsons.jpg');
        expect(typeof show1.endYear).toBe('number');
        expect(typeof show2.endYear).toBe('string');
    });

    it('should assign properties correctly', () => {
        const title = 'The Office';
        const startYear = 2005;
        const endYear = 2013;
        const cover = 'the-office.jpg';
        const show = new TVShow(title, startYear, endYear, cover);
        expect(show.title).toBe(title);
        expect(show.startYear).toBe(startYear);
        expect(show.endYear).toBe(endYear);
        expect(show.cover).toBe(cover);
    });
});