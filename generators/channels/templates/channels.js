'use strict';

// Documentation: http://ranviermud.com/extending/channels/

module.exports = srcPath => {
  const AudienceWorld = require(srcPath + 'ChannelAudience/World');
  const AudienceArea = require(srcPath + 'ChannelAudience/Area');
  const AudienceRoom = require(srcPath + 'ChannelAudience/Room');
  const AudiencePrivate = require(srcPath + 'ChannelAudience/Private');
  const Channel = require(srcPath + 'Channel');

  return [
<% channels.forEach(function (channel) { %>
    new Channel({
      name: '<%= channel %>',
      color: ['bold', 'green'],
      description: 'Your channel description',
      audience: new AudienceWorld(),
      // formatter is optional, without it both the sender and receiver will see "[<%= channel %>] Sender: message"
      formatter: {
        sender: function (sender, target, message, colorify) {
          return colorify(`You <%= channel %>, '${message}'`);
        },

        target: function (sender, target, message, colorify) {
          return colorify(`${sender.name} <%= channel %>s, '${message}'`);
        }
      }
    }),
<% }); %>
  ];
};
