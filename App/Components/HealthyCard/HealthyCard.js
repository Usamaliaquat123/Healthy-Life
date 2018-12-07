import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { SearchBar,Card } from 'react-native-elements'
import styles from './HealthyCard.styles'
import { PropTypes } from "prop-types";
// import styles  from './HealthyCard.styles';
/*
 * Default : Props
 */

HealthyCard.propTypes = {
    /*
     *@Params : ProductsName its a name of products
     */
    ProductsName : PropTypes.string.isRequired,
     /*
     *@Params : ProductPrice its a string of products
     */
    ProductPrice : PropTypes.string.isRequired,
    /*
     *@Params : ProductsImage its a image of products
     */
    ProductsImage : PropTypes.string.isRequired,
    
}




export default class HealthyCard extends Component {
    render() {
        const { ProductsName, ProductsPrice, ProductsImage } = this.props
        return (
            <Card containerStyle={{ marginRight: -5,padding: 0, width: 115, borderRadius: 10, elevation: 6, marginBottom: 10 }}>
                    <View  style={styles.user}>
                      <View style={{ padding: 5, flexDirection: 'row' }} >
                        <Image
                          style={styles.cardImage}
                          resizeMode="contain"
                          source={{ uri : ProductsImage }}
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
                        <Text style={styles.desc}>{ProductsName}</Text>
                        <Text style={styles.price}>Rs: {ProductsPrice}</Text>
                      </View>
                    </View>
                  </Card>
        )
    }
}