import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
  devServer:{
    static: {
        directory: path.join(import.meta.dirname, "public"),
    },
    compress: true,
    port:9000
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
  ],
};
