'use strict';

// Documentation: http://ranviermud.com/extending/events/

module.exports = srcPath => {
  const Broadcast = require(srcPath + 'Broadcast');

  return {
    listeners: {
<% events.forEach(function (event) { %>
      <%= event %>: state => function () {
      },
<% }); %>
    }
  };
};
