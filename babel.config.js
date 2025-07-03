module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);
  const plugins = ["react-native-reanimated/plugin"];
  if (!isTest) {
    plugins.unshift("nativewind/babel");
  }
  return {
    presets: ["babel-preset-expo"],
    plugins,
  };
};
