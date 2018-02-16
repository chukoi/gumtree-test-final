/**
 * main.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// config
const path = require('path');
const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackCfg = require('../webpack.config.js');
const compiler = webpack(webpackCfg);
const config = require('./config');
const content = require("../public/data/content.json"); // path of your json file

// return the json file for the content
// i did it this way because fetch requires absolute urls and it's messy
app.get('/content', function (req, res, next) {
  res.json(content);
});

// app configuration
app.use('/dist', express.static(path.join(__dirname, './dist')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: "/dist/"
}));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

// start server
app.listen(config.port);
