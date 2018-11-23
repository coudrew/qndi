import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { qndi, handlers } from './middleware/qndi';
import rootReducer from './reducers';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main';
console.log(handlers);
const logic = qndi(handlers);
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logic), 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) 
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
