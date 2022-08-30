function sum() {

    if (arguments.length === 0) {
        return Error('No argument');
    }

    else {

        let somme = 0;

        for (let index = 0; index < arguments.length; index++) {

            somme += arguments[index]

        }

        return somme
    }

}

module.exports = sum;