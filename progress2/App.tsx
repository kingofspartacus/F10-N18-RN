import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from './src/reducers';
import AppStack from './src/navigation/AppStack'

let store = createStore(rootReducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    )
  }
}

