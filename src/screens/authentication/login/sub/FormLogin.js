import React, { useRef } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Input from '../../../../components/Input';
import MainButton from '../../../../components/MainButton'
import SocialNetwork from './SocialNetwork'


const FormLogin = (props) => {    
    const refPassword = useRef();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Input
                iconName='user'
                placeholder='Username'
                secure={false}
                returnKey='next'
                refNext={refPassword}
            ></Input>
            <Input
                iconName='lock'
                ref={refPassword}
                placeholder='Password'
                secure={true}
            ></Input>
            
            <View style={styles.wrapper_forgot}>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Forgot')}}
                >
                    <Text style={styles.forgot_text}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
           
            <MainButton content='LOGIN' onPress={()=>{navigation.replace('TabNavigation')}}></MainButton>

            <Text style={{textAlign: 'center', marginBottom: 15}}>Or</Text>

            <SocialNetwork></SocialNetwork>

            <View style={styles.wrapper_sign_up}>
                <Text style={styles.new_user}>New user? </Text>
                <TouchableOpacity
                    style={styles.sign_up_button}
                    onPress={()=>{navigation.navigate('Create')}}
                >
                    <Text style={styles.sign_up_text}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    wrapper_forgot: {
        alignItems: 'flex-end',
    },
    forgot_text: {
        color: 'rgba(6, 187, 121, 0.7)',
        fontSize: 14
    },
    wrapper_sign_up: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    new_user: {
        fontSize: 15
    },
    sign_up_text: {
        color: 'rgba(6, 187, 121, 0.7)',
        fontSize: 15
    }
})

export default FormLogin
