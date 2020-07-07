import path from 'path';

export default (env, args) => {
  const isProduction = args.mode === 'production';
  const devtool = !isProduction && 'inline-source-map';
  const rules = [
    {
      test: /\.js?$/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ];

  const plugins = [];

  return [{
    devtool,
    entry: './entry.js',
    output: {
      path: path.join(__dirname, './'),
      filename: 'bundle.js',
    },
    module: { rules },
    plugins,
  }, {
    devtool,
    entry: './entry.js',
    output: {
      path: path.join(__dirname, './'),
      filename: 'bundle_for_ie.js',
    },
    module: {
      rules: [{
        test: /\.js?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              targets: ['ie 11'],
              useBuiltIns: 'entry',
              corejs: 3,
              debug: true,
            }]],
          },
        }],
      }, ...rules.slice(1)],
    },
    plugins,
  }]
};
