/**
 * Content.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import {nextPage, previousPage} from '../modules/paging';

/**
 * holds the main content, images and navigation bar
 */
class Content extends Component {
  /**
   * constructor
   *
   * @param {object} props
   * @return {null}
   */
  constructor(props) {
    super(props);
    this.initialPage = 1;
  }

  /**
   * get navigation functions from the navigation bar
   *
   * @return {object} navigation functions.
   */
  getChildContext() {
    return {
      onPrevious: this.onPrevious.bind(this),
      onNext: this.onNext.bind(this)
    }
  };

  /**
   * set the initial page for the content and navigation links
   *
   * @return {null}
   */
  componentWillMount() {
    this.setState({
      page: this.initialPage
    });
  }

  /**
   * get the current page state
   *
   * @return {string} the page position
   */
  getPageState() {
    if (this.state.page === this.initialPage) {
      return 'start';
    } else if (this.state.page === this.props.content.length) {
      return 'end';
    }
  }

  /**
   * navigate to the previous page
   *
   * @return {null}
   */
  onPrevious() {
    // Only navigate to the previous page if we are not at the start.
    if (this.getPageState() !== 'start') {
      this.setState({
        page: this.state.page - 1
      });
      // TODO: fix this to use redux and figure out why this fires twice.
      this.props.previousPage(this.state.page);
    }
  }

  /**
   * navigate to the next page
   *
   * @return {null}
   */
  onNext() {
    // Only navigate to the next page if we are not at the end.
    if (this.getPageState() !== 'end') {
      this.setState({
        page: this.state.page + 1
      });
      // TODO: fix this to use redux and figure out why this fires twice.
      this.props.nextPage(this.state.page);
    }
  }

  /**
   * get content description for the current page
   *
   * @return {string}
   */
  getDescription() {
    return this.content.description.replace(/[^\x00-\x7F]/g, "");
  }

  /**
   * get the link text for the previous link
   *
   * @return {string}
   */
  getPreviousText() {
    const page = this.props.content;
    const index = this.state.page - 2;
    if (page[index]) {
      return page[index].title;
    } else {
      return '';
    }
  }

  /**
   * get the link text for the next link
   *
   * @return {string}
   */
  getNextText() {
    const page = this.props.content;
    const index = this.state.page;
    if (page[index]) {
      return page[index].title;
    } else {
      return '';
    }
  }

  /**
   * render the component
   *
   * @return {object}
   */
  render() {
    // Set the current page content
    this.content = this.props.content[this.state.page - 1];
    return (
      <div  className="content">
        {
          this.content &&
          <div className="content__container">
            {this.content.hasOwnProperty('thumbnail') && this.content.thumbnail !== "" &&
            <div>
              <img className="content__img" src={require('../../public/imgs/' + this.content.thumbnail)}/>
            </div>
            }
            <p className="content__paragraph" dangerouslySetInnerHTML={{__html: this.getDescription()}}/>
          </div>
        }
        <Navbar prevText={this.getPreviousText()} nextText={this.getNextText()}/>
      </div>
    )
  }
}

// Get access to the navbar functions through child context.
Content.childContextTypes = {
  onPrevious: PropTypes.func,
  onNext: PropTypes.func
};

// TODO: fix this.
const mapStateToProps = (state) => {
  return {
    page: state.paging.page,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({nextPage, previousPage}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Content);


