import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, "public"),
    },
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ],
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.njk"
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.njk"
    }),
  ],
};
