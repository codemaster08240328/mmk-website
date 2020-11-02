const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withSass({
  sassLoaderOptions: {},
  esModule: true,
  // async rdirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/intelligent-finance',
  //       permanent: true,
  //     }
  //   ]
  // },
  webpack(config, options) {
    return config;
  }
}));
