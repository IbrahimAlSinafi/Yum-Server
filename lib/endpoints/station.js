'use strict';

const { data_sources } = require('../data_sources');

const config = {
  description: 'Endpoint to retieve station information',
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
  await data_sources();
  return h.response('Successfully triggered station endpoint').code(200);
}

module.exports = {
  handler,
  config,
};