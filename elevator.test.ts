import { elevator } from './elevator';

describe('elevator simulation', () =>
{
    test('provided inputs and outputs', () =>
    {
        const results = elevator(['12', '2,9,1,32']);

        expect(results).toBe('560 12,2,9,1,32');
    });

    test('not enough inputs', () =>
    {
        expect(() => elevator(['12'])).toThrowError();
    });

    test('bad input', () =>
    {
        expect(() => elevator(['abc', '1,2,3'])).toThrowError();
    });

    test('decimal start floor', () =>
    {
        expect(() => elevator(['12.5', '1,2,3'])).toThrowError();
    });

    test('decimal travel floor', () =>
    {
        expect(() => elevator(['15', '1.1,2,3'])).toThrowError();
    });
});