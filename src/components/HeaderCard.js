import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
const HeaderCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>{props.mainText}</Text>
            <TouchableOpacity style={styles.wrapper}>
                <FeatherIcon name={props.iconName} size={17} color='#888'></FeatherIcon>
                <Text style={styles.sub_text}>{' '}{props.subText}</Text>
            </TouchableOpacity>
        </View>
    )
}

var styles = StyleSheet.create({
   container: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 10,
   },
   main_text: {
       fontWeight: 'bold',
       fontSize: 20,
       color: '#333'
   },
   wrapper: {
       flexDirection: 'row',
       alignItems: 'center'
   },
   sub_text: {
       color: '#888',
       fontSize: 13
   }
})


export default HeaderCard
