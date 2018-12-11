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

const postWorkoutImage= ''

export default class CategoriesScreen extends Component {
  
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
    networkConnected = true
  }

  // Getting Post Workout categories
  async postWorkout(categoryId){
    try{
      const api = API.create();
      await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(postWorkout => {
          console.log(postWorkout.data.image.src)
          this.postWorkoutImage = postWorkout.data.image.src
        })
        .catch(err => console.log(err))
        this.setState({ networkConnected : true })
    }catch(e){
      this.setState({ networkConnected : false })
    }
  }
 
  // Getting Pre Workout categories
  async preWorkout(categoryId){
    try{
      const api = API.create();
      await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(preWorkout => {
          // this.setState({ preWorkout: preWorkout.data.image.src })
        })
        .catch(err => console.log(err))  
        this.setState({ networkConnected : true })
    }catch(e){this.setState({ networkConnected: false })}
  }
  // Getting Proteins categories 
  async proteins(categoryId){
    try{
      const api = API.create();
      await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(proteins => {
          // this.setState({ proteins: proteins.data.image.src })
        })
        .catch(err => console.log(err))
        this.setState({ networkConnected : true })
    }catch(e){ this.setState({ networkConnected : false }) }
  }
  // Getting weight gainers categories 
  async weightGainers(categoryId) {
    try{
      const api = API.create();
      await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(weightGainers => {
          // this.setState({ weightGainers: weightGainers.data.image.src })
        })
        .catch(err => console.log(err))
        this.setState({ networkConnected : true })
    }catch(e){ this.setState({ networkConnected : false }) }
  }
  // Getting diet and fat loss
  async dietAndFatLoss(categoryId){
    try{
      const api = API.create();
       await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(dietAndFatLoss => {
          // this.setState({ dietAndFatLoss: dietAndFatLoss.data.image.src })
        })
        .catch(err => console.log(err))
        this.setState({ networkConnected : true })
    }catch(e){ this.setState({ networkConnected : false }) }
  }
  // Getting sports categories
  async sportsNutrition(categoryId){
    try{
      const api = API.create();
      await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(sportsNutrition => {
          // this.setState({ sportsNutrition: sportsNutrition.data.image.src })
        })
        .catch(err => console.log(err))
        this.setState({ networkConnected : true })
    }catch(e){ this.setState({ networkConnected : false }) }
  }
  // getting products of females
  async productsOfFemales(categoryId){
    try{
      const api = API.create();
      await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(productsOfFemales => {
          // this.setState({ productsOfFemales: productsOfFemales.data.image.src })
        })
        .catch(err => console.log(err))
        this.setState({ networkConnected : true })
    }catch(e){ this.setState({ networkConnected : false }) }
  }
  // Gettig shakers categories
  async shakers(categoryId) {
    try{
      const api = API.create();
      await api.getCategorieDetail(authWP.consumer_key, authWP.consumer_secret, categoryId)
        .then(shakers => {
          // this.setState({ shakers: shakers.data.image.src })
        })
        .catch(err => console.log(err))
        this.setState({ networkConnected : true })
    }catch(e){ this.setState({ networkConnected : false }) }
  }
  render() {
    
    if(this.state.networkConnected == true){
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View >
            <Text>Connected To Internet</Text>
          </View>
        </ScrollView>
      )
    }else{
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View >
            <Text>Not connected to Internet</Text>
          </View>
        </ScrollView>
      )
    }
  }
}


