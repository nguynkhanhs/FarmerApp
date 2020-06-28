import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LogoImage from '../../assets/images/logo2.png'
import News from './News'
import Notification from './Notification'
import Weather from './Weather'


const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImage} style={styles.logo_image}></Image>
                <Text style={styles.title_text}>FARMER</Text>
                <Weather></Weather>

            </View>
            <View style={styles.content}>
                <Notification></Notification>
                <News></News>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    header: {
        height: 60,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo_image: {
        width: 58,
        height: 55,
        position: 'absolute',
        left: 15,
    },
    title_text: {
        color: 'rgba(6, 187, 121, 1)',
        fontSize: 25,
        fontWeight: 'bold'
    },
    content: {
        paddingHorizontal: 15,
        flex: 1,
        paddingTop: 5
    }
})

export default Home
