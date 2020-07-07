// const, アロー関数, デフォルト引数,
const maskKey = (key, padString = '*') => {
  // const
  const sliced = key.slice(-4);
  // String.prototype.padStart
  return sliced.padStart(key.length, padString);
};

export default maskKey;
