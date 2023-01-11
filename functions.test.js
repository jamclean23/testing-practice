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


// 