// Require the framework and instantiate it
import fastify from 'fastify';
import openApiGlue from 'fastify-openapi-glue';
import swagger from 'fastify-swagger';
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
  
  //app.get('/', WARAFU)
  //app.post('/', hehelols)
  //app.get('/trarar', WARAFU)
  const openApiOptions = {
    specification,
    service,
    noAdditional: true
  };

  const swaggerOptions = {
    // @ts-ignore
    openapi: specification,
    routePrefix: '/docs',
    exposeRoute: process.env.NODE_ENV !== 'production'
  };

  app.register(swagger, swaggerOptions);
  app.register(openApiGlue, openApiOptions);
  



  return app;
  
}
