var path = require('path');
var webpack = require('webpack');

module.exports = {
  // mode: "development" || "production",
  context: __dirname,
  entry: path.resolve(__dirname, 'packageB'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, `dist/${process.env.NAME}`),
  },
  mode: process.env.NODE_ENV,
  plugins: [
    ...(!process.env.NO_DLL
      ? [
          new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./dist/${process.env.NAME}/packageA-manifest.json`),
          }),
        ]
      : []),
  ],
};
