const { createPicker } = require('..');
const pickNumber = createPicker(['one', 'two', 'three']);

console.log(pickNumber('any value'));
