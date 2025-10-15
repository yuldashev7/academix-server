import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log(`✅ JSON Server running on port ${port}`);
});
