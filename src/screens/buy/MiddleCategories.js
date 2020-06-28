import React from 'react'
import { Text, StyleSheet, FlatList, Image, TouchableOpacity, View } from 'react-native'

import cayanqua from '../../data/cayanqua'
import HeaderCard from '../../components/HeaderCard'


const MiddleCategories = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.wrapper_item}>
                <Image source={item.image} style={styles.image}></Image>
                <View style={styles.title}>
                    <Text style={styles.name_text}>{item.name}</Text>
                    <Text style={styles.ncc_text}>NCC: {item.ncc}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <HeaderCard mainText='Popular Items' subText='View all'></HeaderCard>
            <FlatList
                data={cayanqua}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                style={{ marginBottom: 20 }}
            >
            </FlatList>
        </View>

    )
}

var styles = StyleSheet.create({
    wrapper_item: {
        alignItems: 'center',
        marginRight: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    title: {
        marginLeft: 10,
        alignItems: 'center'
    },
    name_text: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 17
    },
    ncc_text: {
        fontSize: 10,
        color: '#888'
    }
})

export default MiddleCategories
