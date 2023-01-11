// JEST TESTING

const Practice = require('./functions.js');
const randomString = require('./random-string.js');


// TEST

test('Test function returns 404', () => {
    expect(Practice.testFunction()).toBe(404);
});

// RANDOM STRING

test('Test if random string is generating a random string', () => {
    let string = randomString();
    expect(typeof string).toBe('string');
    expect(string.length).toBeGreaterThan(0);
})

// CAPITALIZE

test('Capitalize first letter of "blah"', () => {
    expect(Practice.capitalize('blah')).toBe('Blah');
});

test('Capitalize first letter of a random string', () => {
    let string = randomString();
    expect(Practice.capitalize(string)).toBe((string.slice(0, 1).toUpperCase()) + string.slice(1));
});

test('Capitalize returns "Empty String" when given a null string', () => {
    expect(Practice.capitalize('')).toBe('Empty String');
});

test('Capitalize converts values to strings and returns them capitalized',  () => {
    let bool = true;
    let num = 5;
    expect(Practice.capitalize(bool)).toBe('True');
    expect(Practice.capitalize(num)).toBe('5');
});


// REVERSE STRING

test('ReverseString reverses strings', () => {
    expect(Practice.reverseString('blah')).toBe('halb');
    expect(Practice.reverseString('howdy do')).toBe('od ydwoh');
    expect(Practice.reverseString('lala 123')).toBe('321 alal');
});

// CALCULATOR

// ADD

test('Adds numbers', () => {
    expect(Practice.Calculator.add(2, 2)).toBe(4);
    expect(Practice.Calculator.add(-2, -2)).toBe(-4);
    expect(Practice.Calculator.add(0, 0)).toBe(0);
    expect(Practice.Calculator.add(-2, 2)).toBe(0);
});

// SUBTRACT

test('Subtracts numbers', () => {
    expect(Practice.Calculator.subtract(2, 2)).toBe(0);
    expect(Practice.Calculator.subtract(-2, -2)).toBe(0);
    expect(Practice.Calculator.subtract(0, 0)).toBe(0);
    expect(Practice.Calculator.subtract(-2, 2)).toBe(-4);
});

// DIVIDE

test('Divides numbers', () => {
    expect(Practice.Calculator.divide(2, 2)).toBe(1);
    expect(Practice.Calculator.divide(144, 12)).toBe(12);
    expect(Practice.Calculator.divide(144, -12)).toBe(-12);
    expect(Practice.Calculator.divide(2, 0)).toBe(Infinity);
    expect(Practice.Calculator.divide(0, 2)).toBe(0);
});

// MULTIPLY

test('Multiplies numbers',() => {
    expect(Practice.Calculator.multiply(2, 2)).toBe(4);
    expect(Practice.Calculator.multiply(2, 3)).toBe(6);
    expect(Practice.Calculator.multiply(2, -2)).toBe(-4);
    expect(Practice.Calculator.multiply(2, -3)).toBe(-6);
    expect(Practice.Calculator.multiply(0, 0)).toBe(0);
});

// CAESAR CIPHER

test('Converts a string by the designated offset with a caesar cipher', () => {
    expect(Practice.caesarCipher('Defend2', 1)).toBe('Efgfoe3');
    expect(Practice.caesarCipher('defend', -1)).toBe('cdedmc');
    expect(Practice.caesarCipher('z', 1)).toBe('a');
    expect(Practice.caesarCipher('a', -1)).toBe('z');
    expect(Practice.caesarCipher('78...9', 1)).toBe('89...0');
    expect(Practice.caesarCipher('1', -8)).toBe('3');
});

// ANALYZE ARRAY

