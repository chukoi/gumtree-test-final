/**
 * client.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {renderRoutes} from 'react-router-config';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import routes from './routes';
import reducers from './modules'
import {AppContainer} from 'react-hot-loader'

// configure client store
const store = createStore(
  reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)
);

// setup application and routes
const AppRouter = () => {
  return (
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    </AppContainer>
  )
};

// render application
const render = Component => {
  ReactDOM.render((<AppRouter/>), document.getElementById('root'));
};

render();

// Webpack Hot Module Replacement API
// TODO: get this working properly
if (module.hot) {
  module.hot.accept((<AppRouter/>), () => {
    render()
  })
}