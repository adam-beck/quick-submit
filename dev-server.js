const Server = require('hapi').Server;
const WebpackPlugin = require('hapi-webpack-plugin');

const h2o2 = require('h2o2');

const server = new Server();
server.connection({ port: 4000 });

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
    path: '/api/{all}',
    handler: {
      proxy: {
        mapUri: (request, callback) => {
          // strip the leading /api because the server doesn't require that
          callback(null, `http://0.0.0.0:3000/${request.params.all}`);
        }
      }
    }
  });


  server.start(() => console.log(`Server running at: ${server.info.uri}`));
});
