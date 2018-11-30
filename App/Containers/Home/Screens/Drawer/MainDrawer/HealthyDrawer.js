import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar, Card, ListItem, Icon, Header } from 'react-native-elements'
import { DrawerNavigator } from "react-navigation";

// Styles
import styles from './HealthyDrawerStyle'

class MyHomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                style={{
                    height: 20,
                    width: 20,
                }}
                resizeMode='cover'
                source={require('../../../../../Images/Icons/home.png')}
            />
        ),
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Text>
                    Home
          </Text>
            </View>
        )
    }
}
class MyNotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                style={{
                    height: 20,
                    width: 20,
                }}
                resizeMode='cover'
                source={require('../../../../../Images/Icons/category.png')}
            />
        ),
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Text>
                    Notifications
          </Text>
            </View>
        )
    }
}
export default DrawerNavigator(
    {
        Home: {
            screen: MyHomeScreen,
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
    },
    {
        drawerPosition: 'left',
        initialRouteName: 'Home',
        drawerBackgroundColor: '#134167',
        drawerWidth: 200,
    },
)