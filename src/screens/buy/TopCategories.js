import React from 'react'
import { Text, StyleSheet, FlatList, Image, TouchableOpacity, View } from 'react-native'

import cayluongthuc from '../../data/cayluongthuc'
import HeaderCard from '../../components/HeaderCard'


const TopCategories = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.wrapper_item}>
                <Image source={item.image} style={styles.image}></Image>
                <Text style={styles.name_text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <HeaderCard mainText='Popular Items' iconName='filter' subText='Filter'></HeaderCard>
            <FlatList
                data={cayluongthuc}
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
        marginRight: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    name_text: {
        color: '#333',
        fontWeight: 'bold'
    }
})

export default TopCategories
