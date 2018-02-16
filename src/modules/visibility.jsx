/**
 * visibility.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// set initial config
export const TOGGLE_VISIBILITY = '@ssr/visibility/toggle';
const initialState = {
  visible: true
};

/**
 * reducer for changing the visibility state for the content panel
 *
 * @param {*} state
 * @param {object} action
 * @return updated state
 */
export default function visibility(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return Object.assign({}, state, {visible: action.visible});
    default:
      return state;
  }
}

/**
 * action creator for state of the visibility]
 *
 * @return the previous page number
 */
export const toggleVisibility = (visible) => (dispatch) => {
  return dispatch({
    type: TOGGLE_VISIBILITY,
    visible: !visible
  });
};
