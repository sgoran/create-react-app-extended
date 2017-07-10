import * as types from '../actions/actionTypes';

const initialState = {
    toggleNav: false
};

const settings = function(state = initialState, action) {
	
	switch (action.type) {

		case types.TOGGLE_NAV:
        
			return Object.assign({}, state, {
                toggleNav: !action.payload
            })
			
		default:

			return state;

	}
}

export default settings;