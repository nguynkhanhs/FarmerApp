import React, { useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'


import Header from '../../../components/Header'
import Input from '../../../components/Input'
import MainButton from '../../../components/MainButton'


const CreateUser = () => {
    const navigation = useNavigation();
    var refName = useRef()
    var refPhone = useRef()
    var refEmail = useRef()
    var refPassword = useRef()
    var refConfirmPass = useRef()
    return (
        <View style={styles.container}>
            <View style={{marginTop:40}}>
                <Header
                    mainTitle='Create account'
                ></Header>
            </View>
            <Input
                iconName='user'
                placeholder='Username'
                secure={false}
                returnKey='next'
                refNext={refName}
            ></Input>
            <Input
                iconName='emotsmile'
                ref={refName}
                placeholder='Name'
                secure={false}
                returnKey='next'
                refNext={refPhone}
            ></Input>
            <Input
                iconName='phone'
                ref={refPhone}
                placeholder='Phone number'
                secure={false}
                returnKey='next'
                refNext={refEmail}
            ></Input>
            <Input
                iconName='envelope-open'
                ref={refEmail}
                placeholder='Email'
                secure={true}
                returnKey='next'
                refNext={refPassword}
            ></Input>
            <Input
                iconName='lock'
                ref={refPassword}
                placeholder='Passoword'
                secure={true}
                returnKey='next'
                refNext={refConfirmPass}
            ></Input>
            <Input
                iconName='lock'
                ref={refConfirmPass}
                placeholder='Comfirm password'
                secure={true}
            ></Input>
            <MainButton content='CREATE' onPress={()=>{navigation.navigate('Login')}}></MainButton>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    create_button: {
        backgroundColor: 'rgba(6, 187, 121, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginBottom: 15,
        borderRadius: 5
    }
})

export default CreateUser
