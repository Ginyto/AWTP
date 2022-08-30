const sum = require('./sum');

describe('Exercice 1', () => {

    test('should return an error if no argument', () => {
        expect(sum()).toStrictEqual(Error('No argument'));
    })

    test('should 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    })

    test('should -1 - 2 = -3', () => {
        expect(sum(-1, -2)).toBe(-3);
    })

    test('should 1 + 2 + 3 = 6', () => {
        expect(sum(1, 2, 3)).toBe(6);
    })
});
