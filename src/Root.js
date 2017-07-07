/**
 ***** react-redux *****

 - Provider
The react-redux package exports a component called Provider. 
The Provider component makes the store available to all of our container components 
in our application without needing for us to need to pass it in manually every time.
The Provider component expects a store prop that it expects to be a valid redux store

- connect()

In a nutshell, your components are supposed to be concerned only with displaying stuff. 
The only place they are supposed to get information from is their props.

Separated out from this is the concern about: 
how you get the stuff to display(mapStateToProps), 
and how you handle events(mapDispatchToProps)

connect() function guess what connects redux store with component
It's like we have two pipes for data flow 
store -> component (unidirectional)
component -> store (dispatch calls than unidirectional)

connect() recieves several arguments explained below: mapStateToProps, mapDispatchToProps
The connect() function returns a function that expects the 1st argument to be that of a component. 
This is often called a higher-order component.

export const FancyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(FancyAlerter)


- mapStateToProps
Just "binds" redux store to component props and we can do some formating here
For example
function mapStateToProps(state} {
    return({fancyInfo: "Fancy this:" + state.currentFunnyString})
}


- mapDispatchToProps
passes events from component to store AKA dispatch
function mapDispatchToProps(dispatch) {
    return({
        sendTheAlert: () => {dispatch(ALERT_ACTION)}
    })
}


 * 
 */

import React from 'react';
import App from './App';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const Root = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;