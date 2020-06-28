import React, { useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LogoImage from '../../../assets/images/logo.png';
import OTPForm from './OTPForm';


const { width, height } = Dimensions.get('window');



const LoginButton = (props) => {
    return (
        <View style={styles.login_form}>
            <TouchableOpacity
                style={styles.login_button}
                onPress={props.onPress}
            >
                <Text style={styles.text_button}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
        </View>
    )
}



const LoginScreen = () => {
    const [buttonState, setButtonState] = useState(false)
    const widthAnim = useRef(new Animated.Value(250)).current
    const heightAnim = useRef(new Animated.Value(height / 2)).current
    const heightTextAnim = useRef(new Animated.Value(0)).current
    const opacityTextAnim = useRef(new Animated.Value(0)).current

    const ComponentDisplay = (!buttonState)
        ?
        <LoginButton onPress={() => {
            componentAnimation();
            setButtonState(true);
        }}></LoginButton>
        :
        <OTPForm></OTPForm>

    const componentAnimation = () => {
        Animated.timing(
            widthAnim,
            {
                toValue: 230,
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
        Animated.timing(
            heightAnim,
            {
                toValue: 215,
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
        Animated.timing(
            heightTextAnim,
            {
                toValue: 25,
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
        Animated.timing(
            opacityTextAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
    }

    let heightTextAnimValue = heightTextAnim.interpolate({
        inputRange: [0, 25],
        outputRange: ['0%', '25%']
    })

    return (
        <View style={styles.container}>
            <View style={styles.title_wrapper}>
                <Animated.Image source={LogoImage} style={[styles.logo_image, { width: widthAnim, height: heightAnim }]}></Animated.Image>
                <Animated.View style={[styles.title_text, { height: heightTextAnimValue, opacity: opacityTextAnim }]}>
                    <Text style={styles.main_text}>Xin hãy nhập mã xác thực!</Text>
                    <Text style={styles.sub_text}>Chúng tôi đã gửi một mã xác thực đến điện thoại của bạn!</Text>
                </Animated.View>
            </View>
            {ComponentDisplay}
        </View>
    )
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_wrapper: {
        width: 250,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_text: {
        alignItems: 'center',
        opacity: 0
    },
    login_form: {
        height: height / 2,
        width: 230
    },
    main_text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    sub_text: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center'
    },
    login_button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 10
    },
    text_button: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
    },
    
   







})


export default LoginScreen
