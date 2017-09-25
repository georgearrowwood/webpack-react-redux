import path from 'path';
import Express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';

import appRoutes from './routes/app';
import productRoutes from './routes/products';
import authRoutes from './routes/auth';

const server = Express();

server
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .engine('.hbs', exphbs({
    extname: '.hbs',
  }))
  .set('view engine', '.hbs')
  .set('views', 'server/views/')
  .use('/dist', Express.static(path.join(__dirname, '../dist')))
  .use('/', productRoutes)
  .use('/', authRoutes)
  .use('/', appRoutes);

export default server;
