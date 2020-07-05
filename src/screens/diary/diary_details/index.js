import React from 'react';
import { Image, StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

const DiaryDetails = ({ route }) => {

    var data = route.params
    var dataProcess = route.params.process

    const createTwoButtonAlert = (data) =>
        Alert.alert(
            data.action,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo, voluptates fugiat ipsam pariatur facilis molestias, error in voluptatum necessitatibus velit quae fugit adipisci modi aliquid cum ab, aliquam exercitationem.",
            [
                { text: "OK", onPress: () => false }
            ],
            { cancelable: false }
        );



    let renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.item_wrapper, { backgroundColor: item.status == 'work' ? 'rgba(108, 255, 169, .7)' : 'transparent' }]}
                onPress={()=>{
                    createTwoButtonAlert(item)
                }}
            >
                <Text style={styles.item_day}>{item.day}</Text>
                <View style={styles.item_infor}>
                    <Text style={styles.item_action}>{item.action}</Text>
                    <Text style={[styles.item_note, { color: item.status == 'finished' ? 'rgba(6, 187, 121, 1)' : item.status == 'work' ? 'rgba(252, 117, 117, 1)' : "#777" }]}>{item.note}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Image source={data.url} style={styles.product_image}></Image>
                </View>
                <View style={{ backgroundColor: '#fff', borderRadius: 5, flex: 1 }}>
                    <FlatList
                        data={dataProcess}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${index}`}
                        ItemSeparatorComponent={() => (<View style={{ height: 2, backgroundColor: '#eee' }}></View>)}
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                    // contentContainerStyle={{ paddingTop: 10 }}
                    >
                    </FlatList>
                </View>
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
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    }
    ,
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'rgba(6, 187, 121, 1)',
        flexGrow: 1
    },
    product_image: {
        width: 50,
        height: 50,
    },
    item_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    item_day: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 10,
    },
    item_infor: {
        // alignItems: 'center',
        marginLeft: 10,
        flexGrow: 1
    },
    item_action: {
        fontWeight: 'bold',
        fontSize: 18
    },
    item_note: {
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default DiaryDetails
