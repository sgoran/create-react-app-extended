// The redux package exports a function called createStore which will create the actual store for us
// The createStore function expects us to pass the rootReducer in as the first argument
// It'll also expect the initial state to be passed in as the second argument. 

/*
    #### Redux logic

    Store    - Central place for data state

    Reducers - takes curent state and returns next state, like steps.
    it's just a function, a pure function

    Action   - Just an object. The only way to change a store state is to emit or dipatch an
    action. Only required parameter in action is type. Types are just identifiers for reducers.
*/

import rootReducer from './reducers';

import { createStore } from 'redux';

const store = createStore(rootReducer);



export default store;