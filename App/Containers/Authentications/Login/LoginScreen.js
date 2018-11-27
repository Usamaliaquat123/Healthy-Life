import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation'
import { AsyncStorage } from "react-native"
import { Connect } from "react-redux";

// Styles
import styles from './LoginScreenStyle'

 class LoginScreen extends Component { 

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
        <View style={styles.headerLogoContainer}>
          <Image
            style={styles.mainLogoHeader}
            resizeMode="cover"
            source={require('../../../Images/Icons/healthy-life-main-2.png')}
          />
        </View>
        <View style={styles.divStyle}>
          <KeyboardAwareScrollView style={styles.logForm} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true} automaticallyAdjustContentInsets={false} keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
            <Text style={styles.textStyle}> Log in
          </Text>
            <TextInput style={[styles.textInput, !this.state.validated ? styles.error : null]} placeholder="Email" placeholderTextColor="white" underlineColorAndroid={'transparent'} keyboardType={'email-address'}
              autoCapitalize={'none'} autoCorrect={false} onChangeText={(text) => this.validate(text)}
              value={this.state.email}></TextInput>
            <TextInput style={[styles.textInput, !this.state.passwordvalidation ? styles.error : null]} placeholder="Password" placeholderTextColor="white" underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={(text) => this.getpassword(text)} value={this.state.password} maxLength={25} autoCapitalize={'none'} autoCorrect={false}></TextInput>
            <Text style={styles.forgotpass} onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}>Forgot Password</Text>
            <TouchableOpacity style={styles.loginButton} onPress={this.loginPressed}>
              <Text style={styles.btnText}> Log in </Text>
            </TouchableOpacity>
            <View style={styles.inlineComp}>
              <Text style={styles.donthaveaccount}>Create an account?</Text>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={() => this.props.navigation.navigate('RegisterScreen')}>
              <Text style={styles.btnTextSignUp}> Sign Up </Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state,props) => {
  console.log(state)
  console.log(props)
}

const mapDispatchToProps = (state,props) => {
  console.log(state)
  console.log(props)
  
}
export default Connect(mapStateToProps, mapDispatchToProps)(LoginScreen)