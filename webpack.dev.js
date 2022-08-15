const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const port = process.env.PORT || 3000;
module.exports = merge([
  common,
  {
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: port,
      historyApiFallback: true,
    },
  },
]);
