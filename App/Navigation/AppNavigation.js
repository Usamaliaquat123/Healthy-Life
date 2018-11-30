import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation'
import SavedScreen from '../Containers/Home/Screens/Drawer/SavedScreen'
import BrandsScreen from '../Containers/Home/Screens/Drawer/BrandsScreen'
import ContactScreen from '../Containers/Home/Screens/Drawer/ContactScreen'
import NotificationsScreen from '../Containers/Home/Screens/Drawer/NotificationsScreen'
import CategoriesScreen from '../Containers/Home/Screens/CategoriesScreen'
import ProtiensScreen from '../Containers/Home/Screens/ProtiensScreen'
import PostWorkOutsScreen from '../Containers/Home/Screens/PostWorkOutsScreen'
import PreWorkOutsScreen from '../Containers/Home/Screens/PreWorkOutsScreen'
import MainScreen from '../Containers/Home/Screens/MainScreen'
import HomeScreen from '../Containers/Home/HomeScreen'
import RegisterScreen from '../Containers/Authentications/Register/RegisterScreen'
import LoginScreen from '../Containers/Authentications/Login/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import { Image, View, Button, TouchableOpacity, Text } from 'react-native'
import { SearchBar, Card, ListItem, Icon, Header } from 'react-native-elements'
import SearchBarHealthy from '../Components/SearchBar/SearchBar'
import styles from './Styles/NavigationStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
//Drawer Button Custom
// const DrawerButton = (props) => {
//   return (
//     <View style={{ marginLeft: 10 }}>
//       <Icon
//         name='md-menu'
//         type='ionicon'
//         color='#134167'
//         containerStyle={styles.drawerButtonStyle}
//       />
//     </View>
//   );
// };
// Manifest of possible screens
export const PrimaryNav = StackNavigator({
  SavedScreen: { screen: SavedScreen },
  BrandsScreen: { screen: BrandsScreen },
  ContactScreen: { screen: ContactScreen },
  NotificationsScreen: { screen: NotificationsScreen },
  CategoriesScreen: { screen: CategoriesScreen },
  ProtiensScreen: { screen: ProtiensScreen },
  PostWorkOutsScreen: { screen: PostWorkOutsScreen },
  PreWorkOutsScreen: { screen: PreWorkOutsScreen },
  MainScreen: { screen: MainScreen },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: <View>
        <View>
          <Header
            leftComponent={
              <Icon
                name='menu'
                type='ionic'
                color='#134167'
                onPress={() => navigation.navigate('DrawerOpen')} />
            }
            centerComponent={
              <Image
                style={{
                  height: 70,
                  width: 80,
                  marginBottom: 20
                }}
                resizeMode='cover'
                source={require('../Images/Icons/healthy-life-main-3.png')}
              />
            }
            rightComponent={{ icon: 'shopping-cart', color: '#134167' }}
            backgroundColor='white'
          />
        </View>
        <SearchBarHealthy></SearchBarHealthy>
      </View>
    })
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerTitle: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: -50 }}>
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
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

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
        source={require('../Images/Icons/home.png')}
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
        source={require('../Images/Icons/category.png')}
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
export default Drawer = DrawerNavigator(
  {
    Stack : {
      screen : PrimaryNav
    },
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Stack',
    drawerBackgroundColor: '#134167',
    drawerWidth: 200,
  },
)