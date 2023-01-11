// Functions for test project

function testFunction () {
    return 404;
}

function capitalize (string) {
    if (!(typeof string === 'string')) {
        string = string.toString();
    }
    if (string.length === 0) {
        return 'Empty String';
    }
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString (string) {

}

const Calculator = ( () => {

    function add (firstNumber, secondNumber) {
    }

    function subtract (firstNumber, secondNumber) {

    }

    function divide (firstNumber, secondNumber) {

    }

    function multiply (firstNumber, secondNumber) {

    }

    return {
        add,
        subtract,
        divide,
        multiply
    }
})();

function caesarCipher (string) {

}


module.exports = {
    testFunction,
    capitalize,
    reverseString,
    Calculator,
    caesarCipher
};