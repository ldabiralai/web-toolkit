import path from 'path';
import packageJSON from './package.json';
import rules from './webpack-rules';

export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules,
  },
  externals: Object.keys(packageJSON.peerDependencies).reduce(
    (externals, module) =>
      Object.assign(externals, {
        [module]: `commonjs ${module}`,
      }),
    {}
  ),
};
