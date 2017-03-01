const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay('Welcome to the ' + chalk.green('Ranvier') + ' generator!'));

    this.log(`The Ranvier yeoman generator makes it even easier to extend by writing all the boilerplate for you.

    yo ranvier:channels      - Generate new channels
    yo ranvier:command       - Generate a new command
    yo ranvier:player-events - Generate a player events file
`);
  }
};
