const chalk = require('chalk');
const pickColor = require('..').createPicker([
  chalk.red,
  chalk.green,
  chalk.yellow,
  chalk.blue,
  chalk.magenta,
  chalk.cyan,
  chalk.gray,
]);

const colorize = (str) => {
  const color = pickColor(str);
  return chalk.bold(color(str));
};

console.log(colorize('config'), 'Loaded config');
console.log(colorize('db'), 'Connected to database');
console.log(colorize('app'), 'Server listening on port 1234');
console.log(colorize('db'), 'Database connection lost');
console.log(colorize('db'), 'Reconnecting to database');
console.log(colorize('app'), 'GET / 200');
