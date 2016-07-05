var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        ng1: './src/app/ng/ng.app.ts',
        ng2: "./src/app/app.run.ts",
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/js',
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [ /node_modules/, './src/app/index.html' ]
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        // Optimize IDs so that the resources that are most commonly referenced end up with the shortest Ids (reducing size)
        new webpack.optimize.OccurenceOrderPlugin(true),

        new webpack.optimize.UglifyJsPlugin({
            // Must disable mangle or else Angular is unhappy and no-worky
            mangle: false,
            comments: false,
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
            title: 'Angular2 Decorators',
            template: 'src/app/index.html'
        }),

        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer: {
        port: 8000,
        host: 'localhost'
    }
};