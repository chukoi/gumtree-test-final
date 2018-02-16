/**
 * server.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from './modules'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './containers/App';
import {Helmet} from "react-helmet";

const config = require('./config');

// configure the global store.
const store = createStore(reducers, applyMiddleware(thunk));

// Run html in an isomorphic way (i.e. server-side rendering)
export default function serverRenderer({clientStats, serverStats}) {
  return (req, res, next) => {

    // define global context
    const context = {};

    // build the basic app html
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App/>
        </StaticRouter>
      </Provider>
    );

    // send not found
    if (context.status === 404) {
      res.status(404);
    }

    const helmet = Helmet.renderStatic();

    // return the html from the server.
    res.status(200).send(
      `<!doctype html>
        <html ${helmet.htmlAttributes.toString()}>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${html}</div>
          <script src="/dist/client.js" async></script>
        </body>
        </html>`
    );
  };
}
