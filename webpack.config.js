const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html",
});
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    "path": __dirname + '/dir',
    "filename": "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin],
};
