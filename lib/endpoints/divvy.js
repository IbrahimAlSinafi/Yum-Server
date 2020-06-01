'use strict';
const boom = require('@hapi/boom');
const data_sources = require('../data_sources');

const config = {
  description: 'These endpoints used the Divvy API and the provided trip data',
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
  let returnRes;
  switch (request.params.codename) {
  case 'station':
    returnRes = await data_sources.getOneStation(request);
    break;
  case 'riders':
    returnRes = await data_sources.getRidersBasedOnAge(request);
    break;
  case 'recentTrips':
    returnRes = await data_sources.getLast20Trips(request);
    break;
  default:
    throw boom.badRequest('Unsupported parameter');
  }
  return h.response(returnRes.response).code(returnRes.code);
}

module.exports = {
  handler,
  config,
};