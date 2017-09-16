import server from './bootstrap';

const port = process.env.PORT;
server.listen(port, () => {
  console.log('Server is listening at %s', port);
});
