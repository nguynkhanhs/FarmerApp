import React, { useEffect } from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import SplashImage from '../../../assets/images/logo.png'


const Splash = () => {
    const navigation = useNavigation();
    const goToLogin = () => {
        navigation.replace('Login')
    }

    useEffect(()=>{
        setTimeout(() => {
            goToLogin();
        }, 1000);
    })

    return (
        <View style={styles.container}>
            <Image
                source={SplashImage}
                style={styles.image}
            />
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: 300,
        height: 300
    }
})

export default Splash
