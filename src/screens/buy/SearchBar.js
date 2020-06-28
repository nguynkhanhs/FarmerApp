import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.cart_button}
            >
                <FontAwesomeIcon
                    name='shopping-cart'
                    size={27}
                    color='#444'
                >
                </FontAwesomeIcon>
                <Text style={styles.cart_count}>0</Text>
            </TouchableOpacity>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    placeholder='Search something...'
                />
                <TouchableOpacity
                    style={styles.search_button}
                >
                    <IoniconsIcon
                        name='md-search'
                        size={35}
                        color='#444'
                    ></IoniconsIcon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 15
    },
    cart_button: {
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingLeft: 7,
        paddingRight: 10,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        elevation: 5,
    },
    cart_count: {
        position: 'absolute',
        backgroundColor: 'red',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 999,
        paddingHorizontal: 5,
        right: -7,
        top: -7
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        shadowColor: "#000",
        backgroundColor: '#fff',
        elevation: 2

    },
    input: {
        flex: 1,
        paddingVertical: 5,
        paddingLeft: 12,
    },
    search_button: {
        borderRadius: 10,
        paddingRight: 10,
        paddingLeft: 5
    }
})

export default SearchBar
