import Debug from 'debug';

import server from './bootstrap';

const debug = Debug('server');
const port = process.env.PORT;

server.listen(port, () => {
  debug('Server is listening at');
});
