/**
 * App.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// config
const config = require('../config');

// imports
import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Panel from '../components/Panel';
import NotFound from "../containers/NotFound";

/**
 * application container
 */
export default class App extends Component {
  /**
   * constructor
   *
   * @param {object} props
   * @return {null}
   */
  constructor(props) {
    super(props);
  }

  /**
   * render the component
   *
   * @return {object}
   */
  render() {
    return (
      <div className="container">
        {/* add metadata fpr SEO. */}
        <Helmet
          {...config.app.helmet}
        />
        <Switch>
          <Route exact path='/' component={Panel}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
