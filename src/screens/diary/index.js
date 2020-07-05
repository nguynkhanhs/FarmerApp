import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import nhatky from '../../data/nhatky'

const Diary = () => {
    let [data, setData] = useState(nhatky)
    const navigation = useNavigation();


    let searchItem = (text) => {
        let newText = xoa_dau(text).toLowerCase().trim();
        let newData = nhatky.filter((item, index) => {
            if (xoa_dau(item.name).toLowerCase().trim().indexOf(newText) > -1) {
                return item
            }
        })

        setData(newData)
    }

    let renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.item_wrapper}
                onPress={() => {
                    navigation.navigate('DiaryDetails', item)
                }}
            >
                <Image source={item.url} style={styles.item_image}></Image>
                <Text style={styles.item_text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quy trình chăm sóc cây</Text>
            <View style={styles.search}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Tìm kiếm'}
                    onChangeText={(value) => {
                        searchItem(value)
                    }}
                >
                </TextInput>
            </View>
            <View style={{ backgroundColor: '#fff', borderRadius: 5, flex: 1, paddingHorizontal: 10 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${index}`}
                    ItemSeparatorComponent={() => (<View style={{ height: 2, backgroundColor: '#eee' }}></View>)}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                </FlatList>
            </View>
        </View>
    )
}


function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
        paddingBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20,
        color: 'rgba(6, 187, 121, 1)'
    },
    textInput: {
        width: '100%',
        fontSize: 17,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    search: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        marginBottom: 20,
        borderRadius: 5
    },
    item_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15
    },
    item_image: {
        width: 60,
        height: 60
    },
    item_text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15
    }
})

export default Diary
