import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const Bills = ({ route }) => {
    const navigation = useNavigation();
    var data = route.params

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <View style={styles.image_wrapper}>
                    <Image source={data.image} style={styles.product_image}></Image>
                </View>
                <View style={styles.infor}>
                    <View style={styles.infor_wrapper}>
                        <Text style={styles.infor_text}>Ngày đăng: </Text>
                        <Text style={styles.infor_sub_text}>{data.created_time}</Text>
                    </View>
                    <View style={styles.infor_wrapper}>
                        <Text style={styles.infor_text}>Số lượng: </Text>
                        <Text style={styles.infor_sub_text}>{data.amount}{' '}{data.unit}</Text>
                    </View>
                    <View style={styles.infor_wrapper}>
                        <Text style={styles.infor_text}>Thời gian đấu giá: </Text>
                        <Text style={styles.infor_sub_text}>{data.auction_time}{' ngày'}</Text>
                    </View>
                    <View style={styles.infor_wrapper}>
                        <Text style={styles.infor_text}>Trạng thái: </Text>
                        <Text style={[
                            styles.infor_sub_text,
                            (data.status == 'Đã bán') ? { color: 'rgba(6, 187, 121, 1)', fontWeight: 'bold' }
                                : (data.status == 'Không bán được') ? { color: 'rgba(252, 117, 117, 1)', fontWeight: 'bold'}
                                    : {}
                        ]}>{data.status}</Text>
                    </View>
                    <View style={styles.infor_wrapper}>
                        <Text style={styles.infor_text}>Ngày giao hàng: </Text>
                        <Text style={styles.infor_sub_text}>
                            {(data.status == 'Đã bán') ? data.delivery_time : 'Chưa giao hàng'}
                        </Text>
                    </View>
                    <View style={styles.infor_wrapper}>
                        <Text style={styles.infor_text}>Giá bán: </Text>
                        <Text style={[styles.infor_sub_text, { fontWeight: 'bold', color: 'rgba(6, 187, 121, 1)', fontSize: 20 }]}>{data.price}{' VND'}</Text>
                    </View>
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
        justifyContent: 'center',
    }
    ,
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgba(6, 187, 121, 1)',
    },
    image_wrapper: {
        height: '40%',
        justifyContent: 'center',
    }
    ,
    product_image: {
        width: '100%',
        height: '90%',
    },
    infor_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infor_text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    infor_sub_text: {
        fontSize: 17
    },
    infor: {
        justifyContent: 'center',
        flexGrow: 1,

    }
})

export default Bills
