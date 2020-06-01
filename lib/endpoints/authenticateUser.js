'use strict';

const { authenticateUser } = require('../helper/authenticateUser');

const config = {
  description: 'Endpoint to retieve JWT',
  tags: ['api'],
  plugins: {
    'hapi-swagger': {
      responses: {
        200: {
          description: 'OK',
        },
      },
    },
  },
};

async function handler(request, h) {
  const accessToken = await authenticateUser(request);
  return h.response(`access token: ${accessToken}`).code(200);
}

module.exports = {
  handler,
  config,
};