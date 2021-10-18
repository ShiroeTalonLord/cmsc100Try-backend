// Require the framework and instantiate it
import fastify from 'fastify';
import openApiGlue from 'fastify-openapi-glue';
import Swagger from 'fastify-swagger';
import { specification } from './specifications/index.js';
import { hehelols } from './services/base/home.js'
import { WARAFU } from './services/base/LOLOLOL/WARAFU.js'
import { Service } from './services/index.js';
/**
 * This function starts the server
 *
 * @param {*} options
 * @returns {*}
 */
// Run the server!

export async function server (options = { logger: true}){

  const app = fastify(options);
  const service = new Service();
  
  //app.get('/', WARAFU);
  //app.post('/', WARAFU);
  //app.get('/Micky', hehelols);
  
  const openApiOptions = {
    specification
    //service,
    //noAdditional: true

  };
  app.register(openApiGlue, openApiOptions);

  return app;
  
}
