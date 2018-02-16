/**
 * Panel.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchContent} from '../modules/content';
import {toggleVisibility} from '../modules/visibility';
import Header from "./Header";
import Content from "./Content";

/**
 * panel the holds the content and navigation bar.
 */
class Panel extends Component {

  /**
   * constructor
   *
   * @return {null}
   */
  constructor(props) {
    super(props);
  }

  /**
   * set the initial visible state of the content.
   *
   * @return {null}
   */
  componentWillMount() {
    this.setState({
      visible: true
    });
  }

  /**
   * get the json content from the file.
   *
   * @return {null}
   */
  componentDidMount() {
    this.props.fetchContent();
  }

  /**
   * hide/show the content panel.
   *
   * @return {null}
   */
  toggleContent() {
    this.setState({
      visible: !this.state.visible
    });
    // TODO: fix this this so we use redux to update the toggle state.
    this.props.toggleVisibility(this.props.visible);
  }

  /**
   * render the component
   *
   * @return {object}
   */
  render() {
    return (
      <div className="panel">
        <Header visible={this.state.visible} onToggle={this.toggleContent.bind(this)} title={this.props.items.title}/>
        {
          this.state.visible &&
          <Content content={this.props.items.content}/>
        }
      </div>
    );
  }

}

/**
 * setup the actions to update the state
 *
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    items: state.content.items,
    visible: state.visibility.visible
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({fetchContent, toggleVisibility}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Panel);
