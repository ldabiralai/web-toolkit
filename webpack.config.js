const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
};
