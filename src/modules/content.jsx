/**
 * content.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import 'isomorphic-fetch';

// set initial config
export const CONTENT_LOADED = '@ssr/content/loaded';
const config = require('../config');
const initialState = {
  items: {
    titie: '',
    content: []
  }
};

/**
 * reducer for fetching the json content
 *
 * @param {*} state
 * @param {object} action
 * @return updated state
 */
export default function content(state = initialState, action) {
  switch (action.type) {
    case CONTENT_LOADED:
      return Object.assign({}, state, {items: action.items});
    default:
      return state;
  }
}

/**
 * action creator for fetching the file content
 *
 * @return the file content as json
 */
export const fetchContent = () => (dispatch) => {
  // fetch the data.
  return fetch('//' + config.host + ':' + config.port + '/content')
    .then(res => {
      // convert to json.
      return res.json();
    })
    .then(content => {
      // dispatch to reducer to update state.
      dispatch({
        type: CONTENT_LOADED,
        items: content
      });
    })
    // error handling.
    .catch(error => {
      console.error(error);
    })
};
