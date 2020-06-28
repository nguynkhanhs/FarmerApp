import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'



const { width, height } = Dimensions.get('window');


const OTPForm = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.login_form}>
            <OTPInputView
                style={styles.otp_input}
                pinCount={4}
                codeInputFieldStyle={styles.input_default}
                codeInputHighlightStyle={styles.input_focus}
                onCodeFilled={(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
            <TouchableOpacity
                style={styles.submit_button}
                onPress={()=>{navigation.navigate('TabNavigation')}}
            >
                <Text style={styles.text_button}>XÁC NHẬN</Text>
            </TouchableOpacity>
            <View style={styles.sign_form}>
                <Text style={{fontSize: 15}}>Bạn chưa có tài khoản?{' '}</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('SignUp')}
                >
                    <Text style={styles.sign_text}>Đăng ký ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



var styles = StyleSheet.create({
    login_form: {
        height: height / 2,
        alignItems: 'center'
    },
    login_button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 10
    },
    otp_input: {
        width: width / 1.5,
        height: 50
    },
    input_default: {
        backgroundColor: '#fff',
        fontSize: 25,
        padding: 1,
        fontWeight: 'bold',
        borderRadius: 5,
        color: 'rgba(6, 187, 121, 1)'
    },
    input_focus: {
        elevation: 10
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
    sign_form: {
        flexDirection: 'row',
        marginTop: 55
    },
    sign_text: {
        color: 'rgba(6, 187, 121, 1)',
        fontSize: 15,
        fontWeight: 'bold'
    }

})


export default OTPForm
