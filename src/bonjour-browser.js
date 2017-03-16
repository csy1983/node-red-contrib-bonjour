import { Bonjour } from 'node-service-discovery-kit';

require('file-loader?emitFile=false!./bonjour-browser.html'); // eslint-disable-line
require.context('../locales', true, /bonjour-browser\.json/) // eslint-disable-line

module.exports = function(RED) { // eslint-disable-line
  function BonjourBrowserNode(config) {
    RED.nodes.createNode(this, config);

    const browser = new Bonjour({ browse: true });

    browser.on('event', (event) => {
      this.status({
        fill: event.action === 'up' ? 'green' : 'yellow',
        shape: 'dot',
        text: event.data.fqdn,
      });
      this.send(event);
    });

    browser.start();

    this.on('close', () => {
      browser.stop();
    });
  }

  RED.nodes.registerType('bonjour-browser', BonjourBrowserNode);
};
