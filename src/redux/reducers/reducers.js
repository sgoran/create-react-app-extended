// A reducer is literally only a function. 
// It's sole responsibility is to return a representation of the next state.
// The root reducer function is responsible to return a representation of the current 
// global state of the application.
// When we dispatch an action on the store, this reducer function will be called with 
// the current state of the application and the action that causes the state to update.

import * as types from '../actions/actionTypes';

import settings from './settings';

import { combineReducers } from 'redux';

// Initial (starting) state


// Our root reducer starts with the initial state
// and must return a representation of the next state
// The first time it runs, the rootReducer is called with no arguments, 
// so it will always return the initialState on the first run
// The second argument here is the action that gets dispatched from the store. 
// We'll handle our side-effects outside of the reducer in the action creators.

/**
 * Reducers compose the store/state tree
 * that is small detail that nobody writes about
 * so reducer function names are object keys in store
 * 
 * Also when using combineReducers we can rearange store tree 
 * so we can assign our own keys, yay
 
 */

/**
 * Reducer can see only it's part of state 
 */


const desc = function(state = "Initial Desc", action) {
	
	switch (action.type) {

		case types.UPDATE_DESC:
		
			return action.payload;

		default:

			return state;

	}
}



const rootReducer = combineReducers({
	desc,
	settings
});

export default rootReducer;