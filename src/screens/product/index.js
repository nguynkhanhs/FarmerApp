import React from 'react'
import { StyleSheet, View } from 'react-native'
import Form from './Form'
import Transaction from './Transaction'

const Product = () => {
    return (
        <View style={styles.container}>
            <Form></Form>
            <Transaction></Transaction>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 10
    }
})


export default Product
