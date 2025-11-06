const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;

server.use(auth);
server.use(router);

server.listen(3600, () => {
  console.log('🚀 JSON Server + Auth ishlayapti: http://localhost:3600');
});
