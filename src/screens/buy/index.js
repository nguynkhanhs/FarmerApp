import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import SearchBar from './SearchBar'
import HeaderCard from '../../components/HeaderCard'
import TopCategories from './TopCategories'
import MiddleCategories from './MiddleCategories'
import BottomCategories from './BottomCategories'


const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <SearchBar></SearchBar>
            <TopCategories></TopCategories>
            <MiddleCategories></MiddleCategories>
            <BottomCategories></BottomCategories>
            <BottomCategories></BottomCategories>
            <BottomCategories></BottomCategories>
        </ScrollView>
    )
}

var styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#eee'
    },
    wrapper_item: {
        alignItems: 'center',
        marginRight: 15
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 5,
        borderRadius: 10
    },
    name_text: {
        color: '#333'
    }
})

export default Home
