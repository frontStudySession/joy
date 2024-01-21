const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, './src'),
      '@schema': path.resolve(__dirname, './schema'),
      '@assets': path.resolve(__dirname, './assets'),
      // src > *
      '@components': path.resolve(__dirname, './src/components'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@styles': path.resolve(__dirname, './src/styles'),
      // schema > *
      '@constants': path.resolve(__dirname, './schema/constants'),
      '@models': path.resolve(__dirname, './schema/models'),
      // assets > *
      '@icons': path.resolve(__dirname, './assets/icons')
    }
  }
};
