const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = ({ mode } = { mode: 'production ' }) => {
  console.log(`Built mode: ${mode}`);

  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: 'defaults'
                    }
                  ],
                  '@babel/preset-react'
                ]
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      })
    ]
  };
};
