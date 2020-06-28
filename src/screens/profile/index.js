import React, { useRef, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Header from '../../components/Header'


const Profile = () => {
    const navigation = useNavigation();
    var refPhone = useRef()
    var refArea = useRef()
    var refTreeNumber = useRef()
    var refAddress = useRef()

    var subIcon = <Icon
        name={'tree-outline'}
        size={34}
        color='rgba(6, 187, 121, 0.6)'
    />
    return (
        <View style={styles.container}>
            <View style={{}}>
                <Header
                    mainTitle='Tài khoản'
                ></Header>
            </View>

            <View style={styles.wrapper_text}>
                <Icon
                    name={'account-outline'}
                    size={35}
                    color='rgba(6, 187, 121, 0.6)'
                />
                <Text style={styles.text}>Khanh</Text>
            </View>
            <View style={styles.wrapper_text}>
                <Icon
                    name={'phone-outline'}
                    size={35}
                    color='rgba(6, 187, 121, 0.6)'
                />
                <Text style={styles.text}>0978434621</Text>
            </View>
            <View style={styles.wrapper_text}>
                <Icon
                    name={'map-outline'}
                    size={35}
                    color='rgba(6, 187, 121, 0.6)'
                />
                <Text style={styles.text}>200{' m2'}</Text>
            </View>
            <View style={styles.wrapper_text}>
                <Icon
                    name={'tree-outline'}
                    size={35}
                    color='rgba(6, 187, 121, 0.6)'
                />
                <Text style={styles.text}>200{' cây'}</Text>
            </View>
            <View style={styles.wrapper_text}>
                <Icon
                    name={'map-marker-outline'}
                    size={35}
                    color='rgba(6, 187, 121, 0.6)'
                />
                <Text style={styles.text}>Hà Nội</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.submit_button}
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text style={styles.text_button}>ĐĂNG XUẤT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },

    submit_button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        width: 200,
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 10,
        marginTop: 55
    },
    text_button: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    },
    wrapper_text: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        paddingLeft: 10,
        marginBottom: 15,


    },
    text: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        color: '#666'
    }
})

export default Profile
