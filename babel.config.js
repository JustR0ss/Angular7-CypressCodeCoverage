module.exports = function (api) {
    api.cache(true);
    const presets = [];
    const plugins = [["istanbul"]];
  
    return {
      presets,
      plugins
    };
  }