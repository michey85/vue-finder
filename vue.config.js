module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-finder/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Find a Yoga teacher for you!';
      return args;
    });
  },
};
