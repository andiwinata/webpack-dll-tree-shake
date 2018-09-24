const path = require('path');
const webpack = require('webpack');

module.exports = {
  // mode: "development || "production",
  context: __dirname,
  entry: {
    packageA: [path.resolve(__dirname, 'packageA')],
  },
  output: {
    filename: 'packageA.js', // best use [hash] here too
    path: path.resolve(__dirname, `dist/${process.env.NAME}`),
    library: 'packageA_lib_[hash]',
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: 'packageA_lib_[hash]',
      path: path.resolve(__dirname, `dist/${process.env.NAME}/packageA-manifest.json`),
      entryOnly: true,
    }),
  ],
};
