import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import RegisterScreen from '../Containers/Authentications/Register/RegisterScreen'
import LoginScreen from '../Containers/Authentications/Login/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import { Image, View } from 'react-native'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerTitle: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft : -50 }}>
          <Image
            style={{
              height: 120
            }}
            resizeMode='cover'
            source={require('../Images/Icons/healthy-life-main-2.png')}
          />
        </View>
      ),
      headerStyle: {
        fontSize: 23,
        height: 140,
      },
      headerTintColor: '#2699FB',
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  LaunchScreen: { screen: LaunchScreen }
}, {
    // Default config for all screens
    //headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
