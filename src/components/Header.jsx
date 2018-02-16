/**
 * Header.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import React, {Component} from 'react';
import FaFile from 'react-icons/lib/fa/file';
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/lib/md';

/**
 * header that contains the panel title and toggle button
 */
export default class Header extends Component {
  /**
   * render the component
   *
   * @return {object}
   */
  render() {
    return (
      <div className="header">
        <FaFile className="header__file"/>
        <div className="header__title">
          {this.props.title}
        </div>
        <span>
          {this.props.visible ? <MdArrowDropUp onClick={this.props.onToggle} className="header__arrow"/> :
            <MdArrowDropDown onClick={this.props.onToggle} className="header__arrow"/>}
        </span>
      </div>
    );
  }
}