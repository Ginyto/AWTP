const array = [1, 2, 3, 4, 5]

const filteredArray = filter(array, (item) => item < 10)


function filter(array, predicate) {

    const result = []

    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
        result.push(array[i])
        }
    }

    return result
}

module.exports = filter;

