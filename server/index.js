import server from './bootstrap';

const port = process.env.PORT;
/* eslint-disable no-console */
server.listen(port, () => {
  console.log('Server is listening at %s', port);
});
