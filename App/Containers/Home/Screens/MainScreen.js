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
// import HealthyCard from '../../../Components/HealthyCard/HealthyCard';
import {brands}  from "./Brands";

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      products: [],
      featuredProducts: [],
      salesProducts: [],
      newArrivals: [],
      brands: [{
        name: 'cellucor',
        image: '../../../Images/brands/cellucor.png'
    },
    {
        name: 'dymatize',
        image: '../../../Images/brands/dymatize.png'
    },
    {
        name: 'gaspari',
        image: '../../../Images/brands/gaspari.png'
    },
    {
        name: 'labrada',
        image: '../../../Images/brands/labrada.png'
    },
    {
        name: 'nutrex',
        image: '../../../Images/brands/nutrex.png'
    },
    {
        name: 'optimum',
        image: '../../../Images/brands/optimum.png'
    },
    {
        name: 'twinlab',
        image: '../../../Images/brands/twinlab.png'
    },
    {
        name: 'Ultimate-',
        image: '../../../Images/brands/Ultimate-.png'
    },
    {
        name: 'Universal',
        image: '../../../Images/brands/Universal-Nutrition-Product-in-Pakistan-Animal-Pak-300x56.png'
    }]
    }
  }

  componentDidMount = () => {
    console.log('testtsaldaskdlsk')
    console.log(this.state.brands)
  // this.setState({ brands :  })
    this.featuredProducts()
    this.salesProducts()
    this.newArrivals()
  }
  /*
  * getFeatured ==> Products
  */
  featuredProducts = () => {
    const api = API.create();
    api.featuredproducts(authWP.consumer_key, authWP.consumer_secret).then(featuredProducts => {
      this.setState({ featuredProducts: featuredProducts.data })
    })
  }
  /*
   * getSales ==> Products
   */
  salesProducts = () => {
    const api = API.create();
    api.salesProducts(authWP.consumer_key, authWP.consumer_secret).then(salesProducts => {
      this.setState({ salesProducts: salesProducts.data })
    })
  }
  /*
   * New Arrivals ==> Products
   */
  newArrivals = () => {
    const api = API.create();
    api.newArrivals(authWP.consumer_key, authWP.consumer_secret).then(newArrivals => {
      this.setState({ newArrivals: newArrivals.data })
    })
  }
  /*
  * getSales ==> Products
  */

  render() {
    return (

      <View style={styles.contentContainer}>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Horizontal Slider */}
          <Text style={{ fontSize: 13, paddingTop: 15, paddingLeft: 20, fontWeight: 'bold', color: '#1F5273' }}>FEATURED</Text>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.featuredProducts.map((products) => {
                return (
                  <Card containerStyle={{ marginRight: -5, padding: 0, width: 115, borderRadius: 10, elevation: 6, marginBottom: 10 }}>
                    <View style={styles.user}>
                      <View style={{ padding: 5, flexDirection: 'row' }} >
                        <Image
                          style={styles.cardImage}
                          resizeMode="contain"
                          source={{ uri: products.images[0].src }}
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
                      <View style={{ padding: 2 }}>
                        <Text style={styles.desc}>{products.name}</Text>
                        <Text style={styles.price}>Rs: {products.price}</Text>
                      </View>
                    </View>
                  </Card>
                );
              })
            }
          </ScrollView>
          <Text style={{ marginRight: -5, fontSize: 13, paddingTop: 10, paddingLeft: 20, fontWeight: 'bold', color: '#1F5273' }}>SALES</Text>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.salesProducts.map((products) => {
                return (
                  <Card containerStyle={{ marginRight: -5, padding: 0, width: 115, borderRadius: 10, elevation: 6, marginBottom: 10 }}>
                    <View style={styles.user}>
                      <View style={{ padding: 5, flexDirection: 'row' }} >
                        <Image
                          style={styles.cardImage}
                          resizeMode="contain"
                          source={{ uri: products.images[0].src }}
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
                      <View style={{ padding: 2 }}>
                        <Text style={styles.desc}>{products.name}</Text>
                        <Text style={styles.price}>Rs: {products.price}</Text>
                      </View>
                    </View>
                  </Card>
                  // <HealthyCard ProductsName={products.name} ProductsPrice={products.price} ProductsImage={products.images[0].src}></HealthyCard>
                );
              })
            }
          </ScrollView>
          <Text style={{ marginRight: -5, fontSize: 13, paddingTop: 10, paddingLeft: 20, fontWeight: 'bold', color: '#1F5273' }}>NEW ARRIVALS</Text>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.newArrivals.map((products) => {
                return (
                  <Card containerStyle={{ marginRight: -5, padding: 0, width: 115, borderRadius: 10, elevation: 6, marginBottom: 10 }}>
                    <View style={styles.user}>
                      <View style={{ padding: 5, flexDirection: 'row' }} >
                        <Image
                          style={styles.cardImage}
                          resizeMode="contain"
                          source={{ uri: products.images[0].src }}
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
                      <View style={{ padding: 2 }}>
                        <Text style={styles.desc}>{products.name}</Text>
                        <Text style={styles.price}>Rs: {products.price}</Text>
                      </View>
                    </View>
                  </Card>
                  // <HealthyCard ProductsName={products.name} ProductsPrice={products.price} ProductsImage={products.images[0].src}></HealthyCard>
                );
              })
            }
          </ScrollView>
          <Text style={{ marginRight: -5, fontSize: 13, paddingTop: 10, paddingLeft: 20, fontWeight: 'bold', color: '#1F5273' }}>BRANDS</Text>
          <View>
            {
              this.state.brands.map(brands => {
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={{}}/>
                    <Text>{brands.image}</Text>
                </ScrollView>
              })
             }
          </View>
        </ScrollView>

      </View>

    )

  }
}
