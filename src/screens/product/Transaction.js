import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import lichsugiaodich from '../../data/lichsugiaodich';

const Transaction = () => {
    const [data, setData] = useState(lichsugiaodich)
    const navigation = useNavigation();

    function renderItem({ item }) {
        return (
            <TouchableOpacity
                style={[
                    styles.item_wrapper,
                    (item.status == 'Đã bán') ? { backgroundColor: 'rgba(108, 255, 169, 0.5)' }
                        : (item.status == 'Không bán được') ? { backgroundColor: 'rgba(252, 117, 117, 0.5)' }
                            : {}
                ]}
                onPress={() => {
                    navigation.navigate('Bills', item)
                }}
            >
                <Image source={item.image} style={styles.item_iamge}></Image>
                <View style={styles.item_text}>
                    <Text style={styles.item_title}>{item.title}</Text>
                    <Text style={styles.item_created_time}>{item.created_time}</Text>
                </View>
                <View style={styles.item_price}>
                    <Text style={styles.price_text}>{item.price}{' VND'}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lịch sử giao dịch</Text>
                <TouchableOpacity
                    style={styles.detail_button}
                    onPress={() => { navigation.navigate('Details') }}
                >
                    <Text style={styles.detail_text}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 5 }}></View>}
                    style={{ flex: 1}}
                >
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginVertical: 10,
    },
    header: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(6, 187, 121, 1)',
        flexGrow: 1
    },
    detail_button: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 5
    },
    wrapper: {
        flexGrow: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5
    },
    item_wrapper: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: '#fff'
    },
    item_iamge: {
        width: 40,
        height: 40,
        borderRadius: 999,
        marginRight: 10
    },
    item_text: {
        justifyContent: 'center',
        flexGrow: 1
    },
    item_title: {
        fontWeight: 'bold'
    },
    item_created_time: {
        fontSize: 12,
        color: '#777',
        fontWeight: 'bold'
    },
    item_price: {
        justifyContent: 'center',
    },
    price_text: {
        fontWeight: 'bold',
        fontSize: 15
    }

})

export default Transaction
