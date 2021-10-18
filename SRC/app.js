// Require the framework and instantiate it
import fastify from 'fastify';
import { hehelols } from './services/base/home.js'
import { WARAFU } from './services/base/LOLOLOL/WARAFU.js'
/**
 * This function starts the server
 *
 * @param {*} options
 * @returns {*}
 */
// Run the server!

export async function server (options = { logger: true}){
  const app = fastify(options);
  app.get('/', WARAFU);
  app.post('/', WARAFU);
  app.get('/Micky', hehelols);
  return app;
}