const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.htm"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.htm" })],
  module: {
    rules: [
      {
        test: /\.(html|htm)$/i,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: "asset/resource",
      },
      {
        test: /\.(ttf)$/i,
        use: "asset/resource",
      },
    ],
  },
};
