const filter = require('./filter');

describe('Exercice 2', () => {

    test('should return a new array', () => {
        expect(filter([1, 2, 3, 4, 5], (item) => item < 10)).toStrictEqual([1, 2, 3, 4, 5]);
    })

    test('should keep only items that match the predicate', () => {
        expect(filter([1, 2, 3, 4, 5], (item) => item < 3)).toStrictEqual([1, 2]);
    })

    test('should not modify the original array', () => {

        const array = [1, 2, 3, 4, 5];

        filter(array, (item) => item < 3);

        expect(array).toStrictEqual(array);

    })

})