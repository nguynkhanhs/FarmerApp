import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


const MainButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.main_button}
            onPress={props.onPress}
        >
            <Text style={styles.main_text}>{props.content}</Text>
        </TouchableOpacity>
    )
}

var styles = StyleSheet.create({
    main_button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginBottom: 15,
        borderRadius: 5,
        marginTop: 35,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,

        elevation: 6,

    },
    main_text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
})

export default MainButton
