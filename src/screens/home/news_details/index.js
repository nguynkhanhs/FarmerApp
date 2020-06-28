import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';

const NewsDetails = ({ route }) => {
    const navigation = useNavigation();
    var data = route.params

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <View style={styles.image_wrapper}>
                        <Image source={data.imageUrl} style={styles.product_image}></Image>
                    </View>
                    <View style={styles.infor}>
                        <Text style={styles.content_text}>{data.content}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 10,
        marginTop: 55,
        marginBottom: 10
    },
    wrapper: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    header: {
        justifyContent: 'center',
    }
    ,
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgba(6, 187, 121, 1)',
    },
    image_wrapper: {
        height: 200,
        justifyContent: 'center',
    }
    ,
    product_image: {
        width: '100%',
        height: '90%',
    },
    infor: {
        flex: 1,
    },
    content_text: {
        fontSize: 15
    }
})

export default NewsDetails
