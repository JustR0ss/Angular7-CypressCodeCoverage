const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const path = require('path');

module.exports = function () {
    return {
      entry: './src/main.ts',
      output: {
          path: path.resolve(__dirname, "src"),
          filename: 'main.js'
      },
      resolve: {
          extensions: ['.ts', '.js'],
          symlinks: true
      },
      module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false
                        }
                    },
                    {
                        loader: '@ngtools/webpack'
                    }
                ]
            },
            { test: /\.css$/, loader: 'raw-loader' },
            {
                test: /\.less$/,
                loaders: [
                    "raw-loader",
                    "less-loader"
                ]
            },
            {
              test: /\.html$/,
              loader: 'raw-loader'
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: {
                loader: 'file-loader',
                options: {
                  useRelativePath: true
                }
              }
           }
        ]
        },

        plugins: [
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets'}
            ]),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),

            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),
            new AngularCompilerPlugin({
               tsConfigPath: './tsconfig.json',
               entryModule: './src/app/app.module#AppModule',
               sourceMap: true
            }),
            new FilterWarningsPlugin({
                exclude: /System.import/
            })


        ]
    };
}
