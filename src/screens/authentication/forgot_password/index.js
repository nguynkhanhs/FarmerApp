import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import Input from '../../../components/Input'
import MainButton from '../../../components/MainButton'
import {useNavigation} from '@react-navigation/native'

var {width, height} = Dimensions.get('window');

const Forgot = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View  style={styles.header}>
                <Text>
                    <Text style={styles.main_title}>Please,</Text>
                    <Text style={styles.sub_title}> enter your email to receive a verification</Text>
                </Text>
            </View>
            <Input
                iconName='envelope-open'
                placeholder='Your email'
            >
            </Input>
            <MainButton content='Continue'></MainButton>
            <TouchableOpacity
                onPress={()=>{navigation.goBack()}}
            >
                <Text style={styles.back_text}>No, orther time.</Text>
            </TouchableOpacity>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    header: {
        height: height/8.5,
        justifyContent: 'center',
        marginTop:50,
        marginBottom: 20
    },
    main_title: {
        color: 'rgba(6, 187, 121, 0.9)',
        fontSize: 30,
        fontWeight: 'bold',
    },
    sub_title: {
        color: 'rgba(6, 187, 121, 0.8)',
        fontSize: 18,
    },
    back_text: {
        textAlign: 'center',
        fontSize: 13,
        color: '#666'
    }
})

export default Forgot
