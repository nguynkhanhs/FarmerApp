import React, { useRef, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Header from '../../../components/Header'
import Input from '../../../components/Input'


const CreateUser = () => {
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
            <View style={{  }}>
                <Header
                    mainTitle='Đăng ký'
                ></Header>
            </View>
            <Input
                iconName='account-outline'
                placeholder='Họ và tên'
                secure={false}
                returnKey='next'
                refNext={refPhone}
            ></Input>
            <Input
                iconName='phone-outline'
                ref={refPhone}
                placeholder='Số điện thoại'
                secure={false}
                returnKey='next'
                refNext={refArea}
            ></Input>
            <Input
                iconName='map-outline'
                ref={refArea}
                placeholder='Diện tích mảnh vườn'
                returnKey='next'
                refNext={refTreeNumber}
            ></Input>
            <Input
                iconName='tree-outline'
                ref={refTreeNumber}
                placeholder='Số cây trồng'
                returnKey='next'
                refNext={refAddress}
            ></Input>
            <Input
                iconName='map-marker-outline'
                ref={refAddress}
                placeholder='Địa chỉ'
            ></Input>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity
                    style={styles.submit_button}
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text style={styles.text_button}>XÁC NHẬN</Text>
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
})

export default CreateUser
