import { server } from './SRC/app.js';


const start = async () => {
  try {
    
    const app = await server();
    await app.listen (8000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();