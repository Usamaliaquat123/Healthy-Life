import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import styles from './SearchBar.styles'

/*
 * Default : Props
 */



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
            // onChangeText={this.searchOnTextChange}
            // onClear={this.searchOnClear}
            placeholder='Search...' />
        )
    }
}