import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { createBottomTabNavigator } from "react-navigation"
import { TabNavigator, TabBarBottom, TabBarTop } from "react-navigation"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SearchBar, Card, ListItem, Icon, Header } from 'react-native-elements'
import SearchBarHealthy from '../../Components/SearchBar/SearchBar'

// Styles
import styles from '../Styles/HomeScreenStyle'
import MainScreen from '../Home/Screens/MainScreen'
import PreWorkOuts from '../Home/Screens/PreWorkOutsScreen'
import PostWorkOuts from '../Home/Screens/PostWorkOutsScreen'
import Categories from '../Home/Screens/CategoriesScreen'

export default TabNavigator({
  Home: {
    screen: MainScreen,
  },
  PreWorkOut: {
    screen: PreWorkOuts,
    navigationOptions: {
      title: 'Pre workouts',
    }
  },
  PostWorkOut: {
    screen: PostWorkOuts,
    navigationOptions: {
      title: 'Post workouts'
    }
  },
  Categories: { screen: Categories },
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = require('../../Images/Icons/home.png');
        }
        else if (routeName === 'PreWorkOut') {
          iconName = require('../../Images/Icons/preworkout.png');
        }
        else if (routeName === 'PostWorkOut') {
          iconName = require('../../Images/Icons/postworkout.png');
        }
        else if (routeName === 'Categories') {
          iconName = require('../../Images/Icons/category.png');
        }
        //  return <Ionicons name={iconName} size={30} color={tintColor} />
        return <Image
          resizeMode="contain"
          source={iconName}
        />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2699FB',
      inactiveTintColor: 'gray',
      showLabel: true,
      showIcon: true,
      tabStyle: {
        paddingTop: 10,
        backgroundColor: '#134167'
      },
      style: {
        backgroundColor: '#134167',
      },
      labelStyle: {
        color: 'white',
        fontSize: 9,
        fontWeight: 'bold',
        paddingBottom: 5
      },
      indicatorStyle: {
        height: null,
        top: 0,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
      upperCaseLabel: false
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: false,
  }
);





// export default class HomeScreen extends Component {
//   render () {
//     return (
//       <ScrollView style={styles.container}>
//         <KeyboardAvoidingView behavior='position'>
//           <Text>HomeScreen</Text>
//         </KeyboardAvoidingView>
//       </ScrollView>
//     )
//   }
// }
