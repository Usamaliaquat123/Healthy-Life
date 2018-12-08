import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import styles from './SearchBar.styles'
import { PropTypes } from "prop-types";
import SearchBarStyles from './SearchBar.styles';
/*
 * Default : Props
 */

// SearchBarHealthy.propTypes = {
//     /*
//      *@Params : SearchOnClear its just a function
//      */
//     SearchOnClear: PropTypes.func.isRequired,
//      /*
//      *@Params : searchOnTextChange its just a function
//      */
//     searchOnTextChange :  PropTypes.func.isRequired
    
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
        
        // const { searchOnTextChange, searchOnClear } = this.props
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