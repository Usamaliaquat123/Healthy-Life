import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation'
import { AsyncStorage } from "react-native"
import { Connect } from "react-redux";

// Styles
import styles from './RegisterScreenStyle'

 class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validated: true,
      passwordvalidation: true,
      userToken: '',
      userId: '',
      logout: false
    };
  }
 
  validate = (text) => {
    this.setState({ email: text })
  }
  getpassword = (text) => {
    this.setState({ password: text })
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.divStyle}>
          <KeyboardAwareScrollView style={styles.logForm} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true} automaticallyAdjustContentInsets={false} keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
            <Text style={styles.textStyle}> Sign Up
          </Text>
            <TextInput style={[styles.textInput, !this.state.validated ? styles.error : null]} placeholder="Email" placeholderTextColor="white" underlineColorAndroid={'transparent'} keyboardType={'email-address'}
              autoCapitalize={'none'} autoCorrect={false} onChangeText={(text) => this.validate(text)}
              value={this.state.email}></TextInput>
            <TextInput style={[styles.textInput, !this.state.passwordvalidation ? styles.error : null]} placeholder="Password" placeholderTextColor="white" underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={(text) => this.getpassword(text)} value={this.state.password} maxLength={25} autoCapitalize={'none'} autoCorrect={false}></TextInput>
            <TextInput style={[styles.textInput, !this.state.passwordvalidation ? styles.error : null]} placeholder="Confirm Password" placeholderTextColor="white" underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={(text) => this.getpassword(text)} value={this.state.password} maxLength={25} autoCapitalize={'none'} autoCorrect={false}></TextInput>
            <TouchableOpacity style={styles.signUpButton} onPress={this.loginPressed}>
              <Text style={styles.btnText}> Sign Up </Text>
            </TouchableOpacity>
            <View style={styles.inlineComp}>
              <Text style={{ color: '#89A3B5', marginTop: 35, marginRight: 10 }}>__________________</Text>
              <Text style={styles.signupwith}>Or Sign Up With</Text>
              <Text style={{ color: '#89A3B5', marginTop: 35, marginLeft: 10 }}>_________________</Text>
            </View>
            <View style={styles.inlineComp}>
              <Image
                resizeMode="cover"
                style={{
                  marginTop: 10,
                  marginRight: 10,
                  marginBottom : 20
                }}
                source={require('../../../Images/Icons/fb.png')}
              />
              <Image
                style={{
                  marginTop: 10,
                  marginBottom: 20
                }}
                resizeMode="cover"
                source={require('../../../Images/Icons/google.png')}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
}

export default Connect(mapStateToProps )(RegisterScreen)