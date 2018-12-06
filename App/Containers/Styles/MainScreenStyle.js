import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  drawerStyleCustom : {
    backgroundColor : '#FFFFFF',
   
  },
  contentContainer :{
    backgroundColor : 'white',

  },
  cardImage : {
    height : 100,
    width : 100
  },
  mainCard : {

  },
  desc : {
    fontSize : 10
  },
  price : {
    color : '#547B93',
    fontSize: 9
  }
  
})
