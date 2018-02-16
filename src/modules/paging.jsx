import {TOGGLE_VISIBILITY} from "./visibility";

/**
 * paging.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// set initial config
export const NEXT_PAGE = '@ssr/paging/nextpage';
export const PREVIOUS_PAGE = '@ssr/paging/previouspage';
const initialState = {
  page: 1
};

/**
 * reducer for changing page state
 *
 * @param {*} state
 * @param {object} action
 * @return updated state
 */
export default function paging(state = initialState, action) {
  switch (action.type) {
    case 'NEXT_PAGE':
      return Object.assign({}, state, {page: action.page});
    case 'PREVIOUS_PAGE':
      return Object.assign({}, state, {page: action.page});
    default:
      return state;
  }
}

/**
 * action creator for updating state to next page
 *
 * @return the next page number
 */
export const nextPage = (page) => (dispatch) => {
  return dispatch({
    type: NEXT_PAGE,
    page: page + 1
  });
};

/**
 * action creator for updating state to previous page
 *
 * @return the previous page number
 */
export const previousPage = (page) => (dispatch) => {
  return dispatch({
    type: PREVIOUS_PAGE,
    page: page - 1
  });
};
