const Generator = require('yeoman-generator');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'bundle',
      message: 'Bundle for command',
      validate: function (input) {
        if (input.length && input.match(/^[a-z\-_]+$/)) {
          return true;
        }

        return 'Invalid bundle name';
      }
    }, {
      type: 'input',
      name: 'name',
      message: 'Command name (a-z, no spaces or special characters)',
      validate: function (input) {
        if (input.length && input.match(/^[a-z\-_]+$/)) {
          return true;
        }

        return 'Invalid command name';
      }
    }]).then(answers => {
      this.options.bundle = answers.bundle;
      this.options.name = answers.name;
    });
  }

  writing() {
    this.log(`Creating bundles/${this.options.bundle}/commands/${this.options.name}.js`);

    const commandDir = `bundles/${this.options.bundle}/commands/`;

    mkdirp.sync(commandDir);
    this.fs.copyTpl(
      this.templatePath('command.js'),
      this.destinationPath(commandDir + this.options.name + '.js'),
      { command: this.options.name }
    );
  }
};

