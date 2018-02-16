/**
 * index.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

// imports
import {combineReducers} from 'redux'
import content from './content'
import visibility from './visibility'
import paging from './paging'

// combine reducers.
export default combineReducers({
  content,
  visibility,
  paging
});