const baseConfig = require('./webpack.config')
const webpack = require('webpack')

const productionConfig = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
}

const config = Object.assign({}, baseConfig, productionConfig)

module.exports = config
