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
import HealthyCard from '../../../Components/HealthyCard/HealthyCard';
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
      console.log(featuredProducts)
      console.log(`testtt`)

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
          {/* Featured Products */}
          <Text style={styles.subHeading}>FEATURED</Text>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.featuredProducts.map(featuredProducts => {
                return (
                  <HealthyCard ProductsName={featuredProducts.name} ProductsPrice={featuredProducts.price} ProductsImage={featuredProducts.images[0].src}></HealthyCard>
                );
              })
            }
          </ScrollView>
          {/* Sales Products */}
          <Text style={ styles.subHeading }>SALES</Text>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.salesProducts.map(salesProducts => {
                return (
                  <View>
                    <HealthyCard ProductsName={salesProducts.name} ProductsPrice={salesProducts.price} ProductsImage={salesProducts.images[0].src}></HealthyCard>
                  </View>
                );
              })
            }
          </ScrollView>
          {/* New Arrivals */}
          <Text style={ styles.subHeading }>NEW ARRIVALS</Text>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.newArrivals.map(newArrivals => {
                return (
                  <HealthyCard ProductsName={newArrivals.name} ProductsPrice={newArrivals.price} ProductsImage={newArrivals.images[0].src}></HealthyCard>
                );
              })
            }
          </ScrollView>
          <Text style={ styles.subHeading }>BRANDS</Text>
          <View>
            {
              this.state.brands.map(brands => {
                return(
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image style={{ width: 40, height: 40 }} source={{ uri : brands.image}}/>
                    
                </ScrollView>

                )
              })
            
             }
          </View>
        </ScrollView>
      </View>

    )

  }
}
