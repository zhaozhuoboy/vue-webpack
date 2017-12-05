var path = require('path');
require("babel-polyfill");
module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            './src/index.js'
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',//加上这个就可以 直接  import Vue from 'vue' 了
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.less$/,
                loaders: ["style-loader", "css-loader", "postcss-loader?sourceMap=inline", "less-loader?sourceMap=inline"]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
        ]
    }
};