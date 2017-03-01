'use strict';

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
