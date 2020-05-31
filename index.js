const { instantiateServer } = require('./server')
async function start() {
  const server = await instantiateServer();
  console.log(`Server started on port ${server.info.uri}, Everything is looking well`);
  server.start();
}
  
start();