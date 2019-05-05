import path from 'path';
import CircularDependencyPlugin from 'circular-dependency-plugin';
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
  plugins: [
    new CircularDependencyPlugin({
      onStart() {
        // eslint-disable-next-line no-console
        console.log('start detecting webpack modules cycles');
      },
      onDetected({ paths, compilation }) {
        compilation.errors.push(new Error(paths.join(' -> ')));
      },
      onEnd() {
        // eslint-disable-next-line no-console
        console.log('end detecting webpack modules cycles');
      },
    }),
  ],
  externals: Object.keys(packageJSON.peerDependencies).reduce(
    (externals, module) =>
      Object.assign(externals, {
        [module]: `commonjs ${module}`,
      }),
    {}
  ),
};
