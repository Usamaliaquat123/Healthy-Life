import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar, Card, ListItem, Icon, Header } from 'react-native-elements'
import { DrawerNavigator } from "react-navigation";
import SearchBarHealthy from '../../../Components/SearchBar/SearchBar'
import API from "../../../Services/Api";
import { authWP } from "../../keys";
// Styles
import styles from '../../Styles/MainScreenStyle'
import Carousel from 'react-native-snap-carousel';

const users = [
  {
    desc: 'brynn',
    description: 'standard 100% way protein ...',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    price: 4650
  },
  {
    desc: 'brynn',
    description: 'standard 100% way protein ...',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    price: 4650
  }

]
export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    const api = API.create();

    // Getting the products
    api.getProducts(authWP.consumer_key, authWP.consumer_secret)
      .then(prodcts => {
        this.setState({ products: prodcts.data })
        console.log(`testig`)
        console.log(this.state.products)
      })
      .catch(err => console.log(err))

  }


  render() {
    return (

      <View style={styles.contentContainer}>
        {/* <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: 'white'}} >
            <View style={{ height: 180}}>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
     
              </ScrollView>
            </View>
          </View>
        </ScrollView> */}
        <ScrollView>


          {/* Horizontal Slider */}
         
        <ScrollView horizontal={true}>
            {
              this.state.products.map((products) => {
                return (
             
                  <Card containerStyle={{ padding: 0, width: 115, borderRadius: 10, elevation: 10, marginBottom: 10 }}>

                    <View key={i} style={styles.user}>
                      <View style={{ padding: 5, flexDirection: 'row' }} >
                        <Image
                          style={styles.cardImage}
                          resizeMode="contain"
                          source={{ uri: products.featured_src }}
                        />
                        <Icon
                          type='font-awesome'
                          name='heart'
                          size={15}
                          color='#E6E6E6'
                          //  onPress={  }
                          containerStyle={{ marginLeft: -15, paddingTop: 2 }} />
                        <Icon
                          type='ionicon'
                          name='ios-add-circle'
                          size={25}
                          color='#87B6D4'
                          containerStyle={{ marginLeft: -100 }}
                        />
                      </View>
                      <View style={{ padding: 5 }}>
                        <Text style={styles.desc}>{products.title}</Text>
                        <Text style={styles.price}>Rs: {products.price}</Text>
                      </View>
                    </View>
                  </Card>
                );
              })
            }
                </ScrollView>
        
        </ScrollView>

      </View>

    )

  }
}
