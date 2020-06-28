import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.main_title}>{props.mainTitle}</Text>
        </View>
    )
}

var styles = StyleSheet.create({
    header: {
        marginBottom: 30,
        marginTop: 55
    },
    main_title: {
        color: 'rgba(6, 187, 121, 0.9)',
        fontSize: 30,
        fontWeight: 'bold',
    },
    sub_title: {
        color: 'rgba(6, 187, 121, 0.8)',
        fontSize: 18,
    }
})

export default Header
