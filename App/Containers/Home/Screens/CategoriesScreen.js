import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Avatar, Image } from "react-native-elements";

// Styles
import styles from '../../Styles/CategoriesScreenStyle'
import API from "../../../Services/Api";
import { authWP } from "../../keys";
class CategoriesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postWorkout: '',
      preWorkout: String,
      proteins: String,
      weightGainers: String,
      dietAndFatLoss: String,
      sportsNutrition: String,
      productsOfFemales: String,
      shakers: String
    }
  }
  componentDidMount = () => {
    this.postWorkout(118)
    this.preWorkout(117)
    this.proteins(115)
    this.weightGainers(116)
    this.dietAndFatLoss(119)
    this.sportsNutrition(113)
    this.productsOfFemales(114)
    this.shakers(594)

  }

  // Getting Post Workout categories
  postWorkout = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(postWorkout => {
        console.log(postWorkout.data.image.src)
        // this.setState({ postWorkout: postWorkout.data.image.src })
      })
      .catch(err => console.log(err))
  }
  // Getting Pre Workout categories
  preWorkout = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(preWorkout => {
        // this.setState({ preWorkout: preWorkout.data.image.src })
      })
      .catch(err => console.log(err))
  }
  // Getting Proteins categories 
  proteins = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(proteins => {
        // this.setState({ proteins: proteins.data.image.src })
      })
      .catch(err => console.log(err))
  }
  // Getting weight gainers categories 
  weightGainers = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(weightGainers => {
        this.setState({ weightGainers: weightGainers.data.image.src })
      })
      .catch(err => console.log(err))
  }
  // Getting diet and fat loss
  dietAndFatLoss = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(dietAndFatLoss => {
        // this.setState({ dietAndFatLoss: dietAndFatLoss.data.image.src })
      })
      .catch(err => console.log(err))
  }
  // Getting sports categories
  sportsNutrition = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(sportsNutrition => {
        // this.setState({ sportsNutrition: sportsNutrition.data.image.src })
      })
      .catch(err => console.log(err))
  }
  // getting products of females
  productsOfFemales = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(productsOfFemales => {
        // this.setState({ productsOfFemales: productsOfFemales.data.image.src })
      })
      .catch(err => console.log(err))
  }
  // Gettig shakers categories
  shakers = (categoryId) => {
    const api = API.create();
    api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
      .then(shakers => {
        // this.setState({ shakers: shakers.data.image.src })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
       
      <ScrollView showsVerticalScrollIndicator={false}>

        <View >
          <Image
            styles={{  height : 100,width : 100 }}
            resizeMode="contain"
            source={{ uri: this.state.postWorkout }}
          />
      
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)
