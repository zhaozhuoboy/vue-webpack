var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var webpackConfig = require('./webpack.config');
//自动在浏览器中打开
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
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
        new OpenBrowserPlugin({
            url: 'http://localhost:' + process.env.PORT
        })
    ]
})