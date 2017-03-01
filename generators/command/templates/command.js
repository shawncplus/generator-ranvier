'use strict';

// Documentation: http://ranviermud.com/extending/commands/

module.exports = srcPath => {
  const Broadcast = require(srcPath + 'Broadcast');

  return {
    command: state => (args, player) => {
      Broadcast.sayAt(player, 'You just executed <%= command %>!');
    }
  };
};
