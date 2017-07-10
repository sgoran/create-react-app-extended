import * as types from './actionTypes';

export const updateDesc  = function(desc) {
  return {
    type: types.UPDATE_DESC,
    payload: desc
  }
}

export const toggleNav  = function(toggle) {
 // console.log(toggle)
  return {
    type: types.TOGGLE_NAV,
    payload: toggle
  }
}