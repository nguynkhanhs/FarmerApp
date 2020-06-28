import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const SocialNetwork = (props) => {
    return (
        <View style={styles.social_network}>
            <TouchableOpacity
                style={[styles.sn_button, styles.google_button]}
            >
                <Image source={require('../../../../assets/google.png')} style={styles.sn_logo}></Image>
                <Text style={styles.gg_text}>  Google</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity
                style={[styles.sn_button, styles.facebook_button]}
            >
                <Image source={require('../../../../assets/facebook.png')} style={styles.sn_logo}></Image>
                <Text style={styles.fb_text}>  Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}

var styles = StyleSheet.create({
    social_network: {
        flexDirection: 'row',
        marginBottom: 40
    },
    sn_button: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    sn_logo: {
        width: 20,
        height: 20
    },
    
    google_button: {
        width: 145,
        borderWidth: 1,
        borderColor: '#aaa',
    },
    facebook_button: {
        width: 145,
        backgroundColor: '#3B5998',
        borderWidth: 1,
        borderColor: '#3B5998',
    },
    fb_text: {
        color: '#fff'
    }
})

export default SocialNetwork
