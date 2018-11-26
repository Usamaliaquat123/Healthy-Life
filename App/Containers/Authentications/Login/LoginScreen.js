import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation'
import { AsyncStorage } from "react-native"

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './LoginScreenStyle'

export default class LoginScreen extends Component {

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
  // storeData = async (storeValueName, storeValue) => {
  //   try {
  //     await AsyncStorage.setItem(storeValueName, storeValue);
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }
  // resetNavigation(targetRoute) {
  //   const resetAction = NavigationActions.reset({
  //     index: 0,
  //     actions: [
  //       NavigationActions.navigate({ routeName: targetRoute, params: { userId: this.state.userId, userToken: this.state.userToken } }),
  //     ],
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }
  // componentDidMount() {
  //   this.retrieveDataLoginDetails('userTokenGlobal')
  // }
  // retrieveDataLoginDetails = async (getValue) => {
  //   try {
  //     const value = await AsyncStorage.getItem('userTokenGlobal');
  //     console.log('loginValue',value)
  //     if (value !== 'false') {
  //       this.resetNavigation('HomeScreen');
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // }
  validate = (text) => {
    this.setState({ email: text })
  }
  getpassword = (text) => {
    this.setState({ password: text })
  }
  // loginPressed = () => {
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (this.state.email != '' && this.state.password != '') {
  //     this.setState({ validated: true });
  //     this.setState({ passwordvalidation: true });
  //     this.setState({ validated: true });
  //     const api = API.create();
  //     api.postLogin(this.state.email, this.state.password)
  //       .then(response => {
  //         console.log(response)
  //         if (response.status == 200) {
  //           console.log(response);
  //           if (response.data.data.userEmail == 'Unverified') {
  //             Alert.alert(
  //               'Email Unverified',
  //               'Please verify your email before logging in.',
  //               [
  //                 {
  //                   text: 'Resend Email',
  //                   onPress: () => {
  //                     api.registrationtoken(this.state.email)
  //                       .then(response => {
  //                         if (response.status == 200) {
  //                           ToastAndroid.show('Email sent successfully', ToastAndroid.LONG);
  //                         }
  //                       })
  //                       .catch(error => {
  //                         ToastAndroid.show('There was an error sending the email, try again later', ToastAndroid.LONG);
  //                       });
  //                   }
  //                 },
  //                 { text: 'OK', onPress: () => console.log('OK Pressed') },
  //               ],
  //               { cancelable: false }
  //             )
  //           }
  //           else {
  //             this.setState({ userToken: response.data.data.token });
  //             this.setState({ userId: response.data.data.userId });
  //             // console.log(this.state.userId);
  //             this.storeData('userIDGlobal', response.data.data.userId)
  //             this.storeData('userTokenGlobal', response.data.data.token)
  //             console.log(response)
  //             //this.props.navigation.navigate('HomeScreen');
  //             this.resetNavigation('HomeScreen');
  //           }
  //         }
  //         else {
  //           ToastAndroid.show('Invalid credentials, please check your input or signup to continue', ToastAndroid.LONG);
  //           this.setState({ validated: false });
  //           this.setState({ passwordvalidation: false });
  //         }
  //         console.log(response.status);
  //       })
  //       .catch(error => {
  //         console.log(error)
  //         ToastAndroid.show('Invalid credentials, please check your input or signup to continue', ToastAndroid.LONG);
  //         this.setState({ validated: false });
  //         this.setState({ passwordvalidation: false });
  //       });
  //   }
  //   else {
  //     ToastAndroid.show('One of the fields are empty or not set properly', ToastAndroid.LONG);
  //     if (this.state.email === '') {
  //       this.setState({ validated: false });
  //     }
  //     else if (this.state.password === '') {
  //       this.setState({ passwordvalidation: false });
  //     }
  //   }
  // }

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

