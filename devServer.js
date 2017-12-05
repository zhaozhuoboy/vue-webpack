var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.dev");
var path = require('path');

var app = express();
var compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '/')))
//热替换中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)
app.use(hotMiddleware)
app.use(webpackDevMiddleware(compiler,{
    noInfo:false,
    stats:{
        colors:true
    }
}));
app.use(hotMiddleware)

app.listen(3000, function () {
    console.log("Listening on port 3000!");
});