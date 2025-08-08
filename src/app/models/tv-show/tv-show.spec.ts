import { TVShow } from './tv-show';

describe('TVShow', () => {
	it('should create an instance', () => {
        expect(new TVShow("Stranger Things", 2016, 2025, "stranger_things.jpg")).toBeTruthy();
	});
});
