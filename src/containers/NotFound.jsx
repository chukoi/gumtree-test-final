/**
 * NotFound.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import React from 'react';
import {Route} from 'react-router-dom';

/**
 * show not found page on any route besides the base
 */
const NotFound = () => {
  return (
    <Route render={({staticContext}) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      )
    }}/>
  );
};

export default NotFound;