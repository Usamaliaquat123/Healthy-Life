import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar, Card, ListItem, Icon, Header } from 'react-native-elements'
import { DrawerNavigator } from "react-navigation";
import SearchBarHealthy from '../../../Components/SearchBar/SearchBar'

// Styles
import styles from '../../Styles/MainScreenStyle'

export default class MainScreen extends Component {
  render() {
    return (
      <View>
        <Text>MainScreen</Text>
      </View>
    )
  }
}
