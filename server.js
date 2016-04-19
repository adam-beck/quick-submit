'use strict';

const Hapi = require('hapi');
const pg = require('pg');

const connectionString = 'postgres://postgres@localhost:3006/postgres';

var client = new pg.Client(connectionString);
client.connect();

const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: '3005'
});

server.route({
  method: 'GET',
  path: '/health',
  handler: (request, reply) => {
    reply({ status: 'Up' });
  }
});

server.route({
  method: 'POST',
  path: '/names',
  handler: (request, reply) => {

    client.query('INSERT INTO names (name) VALUES ($1)', [request.payload.name], (err, result) => {

      if (err) {
        throw err;
      }

      reply('Successfully submitted');
    });
  }
});

server.route({
  method: 'GET',
  path: '/foobar',
  handler: (request, reply) => {
    client.query(`SELECT * from foo`, (err, results) => {
      reply(results.rows);
    });

  }
});

server.start(err => {

  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
