const path = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'js', 'extension.js'),
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'base64-font-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.vue$/, loader: 'vue' }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: { vue: 'vue/dist/vue.js' },
        modulesDirectories: ['node_modules']
    }
}

module.exports = config
