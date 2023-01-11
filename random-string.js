// Generate a random string

function randomLowerString () {
    const characters = ('abcdefghijklmnopqrstuvwxyz');
    let length = Math.floor(Math.random()* 20 + 5);
    let result = '';
    for (let i = 0; i < length; i++) {
        let position = Math.floor(Math.random() * 51);
        result += characters.slice(position, position + 1);
    }
    return result;
}


module.exports = randomLowerString;