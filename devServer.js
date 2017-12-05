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
    noInfo:true,
    stats:{
        colors:true
    }
}));
app.use(hotMiddleware)
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log("Listening on port "+app.get('port')+'!');
});