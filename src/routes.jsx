/**
 * routes.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import React, {Component} from 'react';
import App from './containers/App'
import NotFound from './containers/NotFound';

// define routes for the application
const routes = [
  {
    component: App,
    routes: [
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
