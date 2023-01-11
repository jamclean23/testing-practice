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
    string.toString();
    let result = string.split('');
    result = result.reverse();
    result = result.join('');
    return result;
}

const Calculator = ( () => {

    function add (firstNumber, secondNumber) {
        return +firstNumber + +secondNumber;
    }

    function subtract (firstNumber, secondNumber) {
        return +firstNumber - +secondNumber;
    }

    function divide (firstNumber, secondNumber) {
        return +firstNumber / +secondNumber;
    }

    function multiply (firstNumber, secondNumber) {
        return +firstNumber * + secondNumber;
    }

    return {
        add,
        subtract,
        divide,
        multiply
    }
})();

function caesarCipher (string, offset) {
    return shiftArray(toArray(string), offset);


    function toArray (string) {
        return string.split('');
    }

    function shiftArray (array, offset) {
        let result = '';
        array.forEach((item, index) => {
            if (/[a-zA-Z]/.test(item)) {
                result += shiftCharacter(item, offset);
            } else if (/\d/.test(item)) {
                result += shiftDigit(item, offset);
            } else {
                result += item;
            }
        });
        return result;
    }

    function shiftCharacter (item, offset) {
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        characters = characters.split('');
        let result = '';
        
        characters.forEach((character, index) => {
            if (character === item.toLowerCase()) {
                let adjustedOffset = index + offset;
                if (adjustedOffset > 25) {
                    adjustedOffset -= 26;
                } else if (adjustedOffset < 0) {
                    adjustedOffset += 26;
                }

                result = characters[adjustedOffset];

                if (/[A-Z]/.test(item)) {
                    result = result.toUpperCase();
                }
            }
        });
        return result;
    }

    function shiftDigit (stringDigit, offset) {
        let result = +stringDigit + offset;
        if (result > 9) {
            return result -= 10;
        } else if (result < 0) {
            return result += 10;
        } else {
            return result;
        }
    }
}


module.exports = {
    testFunction,
    capitalize,
    reverseString,
    Calculator,
    caesarCipher
};