const path = require('path');
const { composePlugins, withNx, withReact } = require('@nx/rspack');

module.exports = composePlugins(withNx(), withReact(), (config) => {

  config.output = {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  };

  config.resolve = {
    alias: {
      path: require.resolve("path-browserify"),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  };

  config.devtool = process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map'

  config.module = {
    parser: {
      'css/auto': {
        namedExports: false,
      },
    },
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
      },
    ],
  };

  return config;
});
