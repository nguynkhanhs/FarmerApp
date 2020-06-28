import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'

const Form = () => {

    var [imgData, setImgData] = useState(null)

    const upload = () => {
        if (imgData) {
            RNFetchBlob
                .fetch('POST', 'http://localhost:3000/upload', {
                    Authorization: "Bearer access-token",
                    otherHeader: "foo",
                    'Content-Type': 'multipart/form-data',
                }, [
                    { name: 'product', filename: 'product.jpg', type: 'image/jpg', data: imgData.source64 },
                ])
                .then((res) => {
                    // console.log(res.data);
                }).catch((err) => {
                    // console.log(err);
                })
            setImgData(null)
        }
    }

    const pickImage = () => {
        const options = {
            title: 'Chọn ảnh sản phẩm',
            takePhotoButtonTitle: 'Chụp ảnh',
            chooseFromLibraryButtonTitle: 'Chọn trong thư viện',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setImgData({
                    source: source,
                    source64: response.data
                })
            }
        });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bán nông sản</Text>
            <View style={styles.form}>
                <View style={styles.form_infor_wrapper}>
                    <View style={styles.form_infor}>
                        <View style={styles.input_wrapper}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tiêu đề</Text>
                            <TextInput
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.input_wrapper}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Số lượng</Text>
                            <TextInput
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.input_wrapper}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Thời gian đấu giá</Text>
                            <TextInput
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.input_wrapper}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Thời gian giao hàng</Text>
                            <TextInput
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.input_wrapper}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Gía sản phẩm</Text>
                            <TextInput
                                style={styles.input}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={styles.post_image}>
                        <View style={styles.image_wrapper}>
                            {(imgData) ? <Image source={imgData.source} style={styles.product_image}></Image> : null}  
                        </View>
                        <View style={styles.button_wrapper}>
                            <TouchableOpacity
                                style={styles.image_button}
                                onPress={pickImage}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Chọn ảnh sản phẩm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.submit_form}>
                    <TouchableOpacity 
                    style={styles.submit_button}
                    onPress={upload}
                    >
                        <Text style={styles.submit_text}>Đăng sản phẩm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 10,
        color: 'rgba(6, 187, 121, 1)'
    },
    form: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        paddingBottom: 15
    },
    form_infor_wrapper: {
        flexDirection: 'row'
    },
    form_infor: {
        width: '45%',
        paddingRight: 10,
    },
    input_wrapper: {
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#fff',
        padding: 0,
        flexGrow: 1,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    content_input: {
        flexDirection: 'row'
    },
    post_image: {
        width: '55%',
        justifyContent: 'center',
    },
    image_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        height: 160
    },
    product_image: {
        width: '100%',
        height: '100%'
    },
    button_wrapper: {
        alignItems: 'center'
    },
    image_button: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#ddd',
        borderWidth: 1
    },
    submit_form: {
        alignItems: 'center',
        marginTop: 10
    },
    submit_button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    submit_text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,

    }
})

export default Form
