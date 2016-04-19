const Server = require('hapi').Server;
const WebpackPlugin = require('hapi-webpack-plugin');

const h2o2 = require('h2o2');

const server = new Server();
server.connection({ port: 3000 });

server.register([
  h2o2,
  {
    register: WebpackPlugin,
    options: './webpack.config.js'
  }
], error => {
  if (error) {
    return console.error(error);
  }

  server.route({
    method: '*',
    path: '/{all}',
    handler: {
      proxy: {
        host: '0.0.0.0',
        port: '3005',
        passThrough: true
      }
    }
  });


  server.start(() => console.log(`Server running at: ${server.info.uri}`));
});
