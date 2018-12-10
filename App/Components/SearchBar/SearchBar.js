import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import styles from './SearchBar.styles'

import {PropTypes} from 'prop-types'



// SearchBarHealthy.propTypes = {
//     onChangeText : PropTypes.func.isRequired,
//     onClear :   PropTypes.func.isRequired
// }   
 
// SearchBarHealthy.defaultProps = {
//     onClear : this.textClear,
//     onChangeText : this.changeTextTrigger
// }

// textClear = () => {
//     console.log(`text clear...`)
// }

// changeTextTrigger = () => {
//     console.log(`testing...`)
// }

// simple
onChangeText = (query) => {
    console.log(query)

}
onClean = () => {
    console.log(`on clear ...`)
}



import { PropTypes } from "prop-types";
import SearchBarStyles from './SearchBar.styles';
/*
 * Default : Props
 */

// SearchBarHealthy.propTypes = {
//     /*
//      *@Params : SearchOnClear its just a function
//      */
//     SearchOnClear: PropsTypes.func.isRequired,
//      /*
//      *@Params : searchOnTextChange its just a function
//      */
//     searchOnTextChange :  PropsTypes.func.isRequired
    
// }
// SearchBarStyles.defaultProps  = {
//     searchOnClear : this.searchOnClear,
//     searchOnTextChange : this.searchOnTextChange
// }


// searchOnTextChange = () => {
//     // Tada: Search on clear trigger
// }
// searchOnClear = () => {
//     // tata : Cleared Text
// }

export default class SearchBarHealthy extends Component {
    render() {
        return (
            <SearchBar
            containerStyle={styles.searchcontainer}
            inputContainerStyle={styles.searchtextcontainer}
            inputStyle={{ marginTop: 5 }}
            placeholderTextColor='#2699FB'
            platform="ios"
            round
            cancelIcon={false}
            searchIcon={null}

            // onChangeText={searchOnTextChange}
            // onClear={searchOnClear}
            placeholder='Search...' />
        )
    }
}