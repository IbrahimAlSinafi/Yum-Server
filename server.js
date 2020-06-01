'use strict';

const Hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const sanity = require('./lib/endpoints/sanity');
const divvy = require('./lib/endpoints/divvy')
const authenticateUser = require('./lib/endpoints/authenticateUser');
const manifest = require('./manifest');

const instantiateServer = async () => {
  const server = new Hapi.Server({ host: 'localhost', port: 3000 });

  const swaggerOptions = {
    info: {
      title: manifest.serviceName,
      version: process.env.npm_package_version,
    },
    documentationPath: '/documentation',
    jsonPath: '/swagger.json',
    schemes: ['https'],
  };

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: sanity.handler,
      config: sanity.config,
    },
    {
      method: 'GET',
      path: '/divvy/{codename}',
      handler: divvy.handler,
      config: divvy.config,
    },
    {
      method: 'POST',
      path: '/token',
      handler: authenticateUser.handler,
      config: authenticateUser.config,
    },
  ]);
  try {
    await server.register([
      Inert,
      Vision,
      { plugin: HapiSwagger, options: swaggerOptions },
    ]);
    return server;
  } catch (error) {
    console.log('Problem starting server');
    throw Error(`${error.message}`);
  }
};

module.exports = {
  instantiateServer,
};
  