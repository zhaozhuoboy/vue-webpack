var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig,{
    entry: [
        'webpack-hot-middleware/client??reload=true',
        './src/index.js'
    ],
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
})