import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  divStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#134167'
  },
  textStyle: {
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    marginBottom: 20,
  },
  logForm: {
    alignSelf: 'stretch',
  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    color: 'white',
    padding : 12,
    borderWidth : 1,
    borderColor : 'transparent',
    borderRadius : 8,
    backgroundColor : '#4B718D',
  },
  signUpButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 5,
  },
  btnText: {
    color: '#636363',
    fontWeight: 'bold',
  },
  error: {
    borderBottomColor: 'red'
  },
  forgotpass: {
    alignSelf : 'flex-end',
    color: 'white',
  },
  signupwith: {
    alignSelf: 'stretch',
    marginTop: 45,
    color: '#89A3B5',
    fontWeight : "bold"
  },
  inlineComp: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerLogoContainer : {
    height : 140,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'center'
  },
  mainLogoHeader : {
    height : 120,
  }
})
