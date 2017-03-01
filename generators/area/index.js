const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const fs = require('fs');

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
      name: 'name',
      message: 'Area key (a-z, no spaces or special characters)',
      validate: function (input) {
        if (input.length && input.match(/^[a-z\-_]+$/)) {
          return true;
        }

        return 'Invalid area name';
      }
    }, {
      type: 'input',
      name: 'title',
      message: 'Area title',
    }, {
      type: 'input',
      name: 'respawnInterval',
      message: 'Respawn interval (seconds)',
      default: 60
    }]).then(answers => {
      this.options.bundle = answers.bundle;
      this.options.name = answers.name;
      this.options.title = answers.title;
      this.options.respawnInterval = answers.respawnInterval;
    });
  }

  writing() {
    const areaDir = this.destinationPath(`bundles/${this.options.bundle}/areas/${this.options.name}`);

    if (fs.existsSync(areaDir)) {
      return this.log('Area already exists');
    }

    this.log(`Creating area ${this.options.title}`);

    mkdirp.sync(areaDir + '/');
    for (const file of ['items', 'npcs', 'rooms']) {
      this.fs.copy(this.templatePath(file + '.yml'), `${areaDir}/${file}.yml`);
    }

    this.fs.copyTpl(
      this.templatePath('manifest.yml'),
      areaDir + '/manifest.yml',
      {
        title: this.options.title,
        respawnInterval: this.options.respawnInterval
      }
    );
  }
};
