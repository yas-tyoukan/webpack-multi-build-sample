module.exports = (api) => {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '79',
          firefox: '72',
          safari: '13',
        },
        useBuiltIns: 'entry',
        corejs: 3,
        debug: true,
      },
    ],
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
