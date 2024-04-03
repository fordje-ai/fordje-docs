const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: {
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: { fullySpecified: false },
          },
        ],
      },
    },
  },
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};