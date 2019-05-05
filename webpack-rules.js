import path from 'path';

export default [
  {
    test: /\.js$/,
    include: path.resolve(__dirname, './src'),
    exclude: /(node_modules|dist)/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          [
            require.resolve('babel-plugin-named-asset-import'),
            {
              loaderMap: {
                svg: {
                  ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                },
              },
            },
          ],
        ],
      },
    },
  },
];
