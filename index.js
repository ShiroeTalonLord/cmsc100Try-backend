import { server } from './SRC/app.js';


const start = async () => {
  let app;
  try {
    
    const app = await server();
    await app.listen (8080)

  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();