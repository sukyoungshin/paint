const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: "css-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      root: __dirname,
      src: path.resolve(__dirname, "src")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Paint",
      template: path.join(__dirname, "./public/index.html")
    })
  ]
};
