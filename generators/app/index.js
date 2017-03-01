const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    this.log(`
                         _
                        (_)
    _ __ __ _ _ ____   ___  ___ _ __
   | '__/ _\` | '_ \\ \\ / / |/ _ \\ '__|` + chalk.bold.green("    . ' .\n") +
   '   | |   (_| | | | \\ V /| |  __/ |   ' + chalk.bold.green(". '       ' .\n") +
   '   |_|  \\__,_|_| |_|\\_/ |_|\\___|_| ' + chalk.bold.green(" |    ") + chalk.bold.white(" _ __ ") + chalk.bold.green("   |\n") + 
   '                                   ' + chalk.bold.green(" |    ") + chalk.bold.white("| '__|") + chalk.bold.green("   |\n") +
   '                                   ' + chalk.bold.green(" |    ") + chalk.bold.white("| |   ") + chalk.bold.green("   |\n") +
   '                                   ' + chalk.bold.green(" |    ") + chalk.bold.white("|_|   ") + chalk.bold.green("   |\n") +
   '                                   ' + chalk.bold.green("  ' .       . '\n") +
   '                                   ' + chalk.bold.green("      ' . '\n")
   );

    this.log(`
    yo ranvier:area          - Generate a new area
    yo ranvier:channels      - Generate new channels
    yo ranvier:command       - Generate a new command
    yo ranvier:player-events - Generate a player events file\n`);
  }
};
