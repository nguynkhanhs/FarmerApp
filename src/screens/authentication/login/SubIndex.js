import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../../../components/Header'
import FormLogin from './sub/FormLogin'


const Login = (props) => {    
    return (
        <View style={styles.container}>
            <Header
                mainTitle='Welcome!'
                subTitle='Please sign-in to continue'
            ></Header>
            <FormLogin></FormLogin>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    }
})

export default Login
