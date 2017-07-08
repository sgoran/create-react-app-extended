import * as types from './actionTypes';

export const updateDesc  = function(desc) {
  return {
    type: types.UPDATE_DESC,
    payload: desc
  }
}