const Generator = require('yeoman-generator');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'bundle',
      message: 'Bundle',
      validate: function (input) {
        if (input.length && input.match(/^[a-z\-_]+$/)) {
          return true;
        }

        return 'Invalid bundle name';
      }
    }, {
      type: 'input',
      name: 'events',
      message: 'Events (comma separated list)',
      validate: function (input) {
        if (input.length && input.match(/^[a-z, ]+$/i)) {
          return true;
        }

        return 'Invalid event name';
      }
    }]).then(answers => {
      this.options.bundle = answers.bundle;
      this.options.events = answers.events.split(/, */);
    });
  }

  writing() {
    const bundleDir = `bundles/${this.options.bundle}/`;
    const targetFile = this.destinationPath(bundleDir + 'player-events.js');
    if (this.fs.exists(targetFile)) {
      return this.log('Player-events file exists');
    }

    this.log(`Creating bundles/${this.options.bundle}/player-events.js`);


    mkdirp.sync(bundleDir);
    this.fs.copyTpl(
      this.templatePath('player-events.js'),
      targetFile,
      { events: this.options.events }
    );
  }
};

