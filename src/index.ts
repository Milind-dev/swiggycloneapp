import {Server} from './server'

let server = new Server().app;
const port = 3000;


server.listen(port, () => {
  console.log(`server start at  ${port}`);
});
