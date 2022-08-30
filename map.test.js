const map = require('./map');

describe('Exercice 3', () => {

    test('should return a new array', () => {
        expect(map([1, 2, 3, 4, 5], x => x * 2)).toStrictEqual([2, 4, 6, 8, 10]);
    })

    test('should transform the array', () => {
        expect(map([1, 2, 3, 4, 5], x => x * 2)).toStrictEqual([2, 4, 6, 8, 10]);
    })

    test('should not mutate the array', () => {

        const array = [1, 2, 3, 4, 5];

        map(array, x => x * 2);
        
        expect(array).toStrictEqual([1, 2, 3, 4, 5]);
    })

})