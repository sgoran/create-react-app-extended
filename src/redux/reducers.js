// A reducer is literally only a function. 
// It's sole responsibility is to return a representation of the next state.
// The root reducer function is responsible to return a representation of the current 
// global state of the application.
// When we dispatch an action on the store, this reducer function will be called with 
// the current state of the application and the action that causes the state to update.

import * as types from './actionTypes';
import { combineReducers } from 'redux';

// Initial (starting) state
const initialState = {
	currentTime: new Date().toString()
}

// Our root reducer starts with the initial state
// and must return a representation of the next state
// The first time it runs, the rootReducer is called with no arguments, so it will always return the initialState on the first run
// The second argument here is the action that gets dispatched from the store. 
// We'll handle our side-effects outside of the reducer in the action creators.

function reducer(state = initialState, action) {

	switch (action.type) {

		case types.FETCH_NEW_TIME:

			return { ...state, currentTime: action.payload }

		default:

			return state;

	}
}

const rootReducer = combineReducers({
	reducer
});

export default rootReducer;