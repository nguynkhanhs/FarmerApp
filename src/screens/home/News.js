import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tintucnongnghiep from '../../data/tintucnongnghiep'
import tintucthitruong from '../../data/tintucthitruong'


const Notification = () => {
    const [currentNews, setCurrentNews] = useState('nongnghiep')
    const navigation = useNavigation();

    var tintuc = currentNews == 'nongnghiep' ? tintucnongnghiep : tintucthitruong

    const changeCurrentNews = (news) => {
        if (news == 'nongnghiep') {
            setCurrentNews('nongnghiep')
        } else {
            setCurrentNews('thitruong')
        }
    }
    function renderItem({ item }) {
        var component
        if (item.id == 1) {
            component = (
                <TouchableOpacity style={styles.hot_news}
                    onPress={() => {
                        navigation.navigate('NewsDetails', item)
                    }}
                >
                    <Image source={item.imageUrl} style={{ width: '100%', height: '100%' }}></Image>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,1)']} style={styles.news_mask}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14, textTransform: 'uppercase' }}>{item.title}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        } else {
            component = (
                <TouchableOpacity style={styles.news_item}
                    onPress={() => {
                        navigation.navigate('NewsDetails', item)
                    }}
                >
                    <Image source={item.imageUrl} style={{ width: 120, height: '100%', marginRight: 10 }}></Image>
                    <Text style={{ width: 180 }}>{item.title}</Text>
                </TouchableOpacity>
            )
        }
        return component
    }
    return (
        <View style={styles.container}>
            <View style={styles.title_wrapper}>
                <Text style={styles.title_text}>Tin tức</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#666' }}>
                        Xem thêm
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.main_content}>
                <View style={styles.button_wrapper}>
                    <TouchableOpacity
                        style={[styles.select_news_button, currentNews !== 'thitruong' ? styles.active_background_color : {}]}
                        onPress={() => { changeCurrentNews('nongnghiep') }}
                    >
                        <Text style={[styles.button_text, currentNews == 'nongnghiep' ? styles.active_text_color : {}]}>Nông nghiệp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.select_news_button, currentNews !== 'nongnghiep' ? styles.active_background_color : {}]}
                        onPress={() => { changeCurrentNews('thitruong') }}
                    >
                        <Text style={[styles.button_text, currentNews == 'thitruong' ? styles.active_text_color : {}]}>Thị trường</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={tintuc}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }}></View>}
                >
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexGrow: 1
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 18,
        flexGrow: 1,
        color: 'rgba(6, 187, 121, 1)',
    },
    title_wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    main_content: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
        flexGrow: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    hot_news: {
        height: 120,
    },
    news_mask: {
        height: '40%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: '100%'
    },

    news_item: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    select_news_button: {
        width: '49%',
        paddingVertical: 5,
        borderColor: 'rgba(6, 187, 121, 0.3)',
        borderWidth: 2
    },
    button_text: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    active_text_color: {
        color: '#fff',
    },
    active_background_color: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
    }

})

export default Notification
