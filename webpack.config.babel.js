import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: { path: path.join(__dirname, "build"), filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loaders: ["babel-loader", "ts-loader"],
        exclude: /nod_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    })
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000
  }
};
