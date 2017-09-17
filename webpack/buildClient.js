import webpack from 'webpack';
import webpackConfig from './config/webpack.client';

const compiler = webpack(webpackConfig);

/* eslint-disable no-console */
compiler.run((err, stats) => {
  if (stats.hasErrors() || err) {
    console.log('Client build failed!');
    console.log(err, stats.compilation.errors);
    process.exit(1);
  } else {
    console.log('Client build finished successfully!');
  }
});
