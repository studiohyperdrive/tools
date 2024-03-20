import { of } from 'rxjs';

import { fetchIf } from './fetch-if.operator';

describe('fetchIf', () => {
	const source = of([
		{
			id: 'hello',
		},
	]);

	const fetch = () => of({ id: 'world' });

	it('should return the value if it is present', async () => {
		fetchIf(source, (data) => data.find((item) => item.id === 'hello'), fetch).subscribe((result) => {
			expect(result).toEqual({ id: 'hello' });
		});
	});

	it('should fetch the value if it is not present', async () => {
		fetchIf(source, (data) => data.find((item) => item.id === 'world'), fetch).subscribe((result) => {
			expect(result).toEqual({ id: 'world' });
		});
	});
});
