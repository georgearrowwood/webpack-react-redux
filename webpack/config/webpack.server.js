import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

export default {

  entry: path.resolve(__dirname, '../../server/index.js'),

  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'server.bundle.js',
  },

  target: 'node',
  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, '../../node_modules'))
    .concat(['react-dom/server', 'react/addons'])
    .reduce(ext => ext),

  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        PORT: 3000,
        config: JSON.stringify('production'),
      },
    }),
  ],
};
