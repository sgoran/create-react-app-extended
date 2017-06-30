// The react-redux package exports a component called Provider. 
// The Provider component makes the store available to all of our container components 
// in our application without needing for us to need to pass it in manually every time.
// The Provider component expects a store prop that it expects to be a valid redux store

//The connect() function returns a function that expects the 1st argument to be that of a component. This is often called a higher-order component.
import React from 'react';
import App from './App';
import store from './redux/configureStore.js';
import { Provider } from 'react-redux';

const Root = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;