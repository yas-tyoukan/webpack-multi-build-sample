const isIncludeIE11 = (caller) => caller && caller.target === 'ie11';

module.exports = (api) => {
  const includeIE11 = api.caller(isIncludeIE11);
  const targets = {
    chrome: '79',
    firefox: '72',
    safari: '13',
  };
  if (includeIE11) {
    targets.ie = '11';
  }
  const presets = [
    [
      '@babel/preset-env',
      {
        targets,
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
