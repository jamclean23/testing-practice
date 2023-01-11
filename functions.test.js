const Practice = require('./functions.js');


test('Test function returns 404', () => {
    expect(Practice.testFunction()).toBe(404);
});
