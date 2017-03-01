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
      name: 'channels',
      message: 'Channels (comma separated list)',
      validate: function (input) {
        if (input.length && input.match(/^[a-z, ]+$/i)) {
          return true;
        }

        return 'Invalid channel name';
      }
    }]).then(answers => {
      this.options.bundle = answers.bundle;
      this.options.channels = answers.channels.split(/, */);
    });
  }

  writing() {
    const bundleDir = `bundles/${this.options.bundle}/`;
    const targetFile = this.destinationPath(bundleDir + 'channels.js');

    if (this.fs.exists(targetFile)) {
      return this.log('Channels file exists');
    }

    this.log(`Creating bundles/${this.options.bundle}/channels.js`);


    mkdirp.sync(bundleDir);
    this.fs.copyTpl(
      this.templatePath('channels.js'),
      targetFile,
      { channels: this.options.channels }
    );
  }
};

