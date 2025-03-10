const path = require("path");

// SCSSファイルのコンパイルはgulpでやるので一旦コメントアウト
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../js"),
    filename: "main.js",
  },

  // SCSSファイルのコンパイルはgulpでやるので一旦コメントアウト
  // module: {
  //   rules: [
  //     {
  //       test: /\.(css|sass|scss)/,
  //       use: [
  //         {
  //           loader: MiniCssExtractPlugin.loader,
  //         },
  //         {
  //           loader: "css-loader",
  //         },
  //         {
  //           loader: "sass-loader",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // plugins: [new MiniCssExtractPlugin({ filename: "../css/style.css" })],
};
