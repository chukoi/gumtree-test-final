/**
 * Navbar.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoTriangleLeft, GoTriangleRight} from 'react-icons/lib/go';

/**
 * bottom navigation bar the holds the links to change the content
 */
export default class Navbar extends Component {
  /**
   * render the component
   *
   * @return {object}
   */
  render() {
    return (
      <div className="navbar">
        {this.props.prevText &&
        <span className="navbar_link navbar--previous">
            <GoTriangleLeft onClick={this.context.onPrevious} className="navbar__arrow navbar--left"/>
            <a onClick={this.context.onPrevious} className="navbar__text navbar--left"
               href="#">{this.props.prevText}</a>
          </span>
        }
        {this.props.nextText &&
        <span onClick={this.context.onNext} className="navbar__link navbar--next">
            <a onClick={this.context.onNext} className="navbar__text navbar--right" href="#">{this.props.nextText}</a>
            <GoTriangleRight className="navbar__arrow navbar--right"/>
          </span>
        }
      </div>
    );
  }
}

/**
 * pass the navigation functions to the context so we can access them in the parent component
 */
Navbar.contextTypes = {
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
};