import { server } from './SRC/app.js';


const start = async () => {
  let app;
  try {
    
    app = await server({logger :true});
    await app.listen (8080)

  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();