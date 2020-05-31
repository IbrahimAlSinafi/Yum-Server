'use strict';
const manifest = require('../../manifest')

const config = {
  description: 'Ping back!',
  notes: "Get a quick response from the server to verify it's up",
  tags: ['test', 'api'],
};

function handler(request, h) {
  return h.response(`${manifest.serviceName} is awake 👀 and listening 👂`).code(200);
}

module.exports = {
  handler,
  config,
};
