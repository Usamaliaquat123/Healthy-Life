import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import MainScreen from '../Containers/Home/Screens/MainScreen'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import AppNavigation from '../Navigation/AppNavigation'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}
