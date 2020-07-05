import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'


const DoneModal = (props) => {

    var { modalState, setModalState, data, setData, currentMission } = props
    var [imgData, setImgData] = useState(null)

    const hiddenModal = () => {
        var temp = { ...modalState }
        temp.showModal = false
        setModalState(temp)
        if (imgData) {
            setImgData(null)
        }
    }

    const upload = () => {
        if (imgData) {
            RNFetchBlob
                .fetch('POST', 'http://localhost:3000/upload', {
                    Authorization: "Bearer access-token",
                    otherHeader: "foo",
                    'Content-Type': 'multipart/form-data',
                }, [
                    { name: 'bill', filename: 'bill.jpg', type: 'image/jpg', data: imgData.source64 },
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
            title: 'Chọn hóa đơn',
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
        <Modal
            isVisible={modalState.showModal}
            animationIn={'zoomIn'}
            animationOut={'fadeOut'}
            animationInTiming={500}
            animationOutTiming={500}
            onBackdropPress={hiddenModal}
            useNativeDriver={true}
            backdropOpacity={0.5}
        >
            <View style={styles.container}>
                <Text style={styles.title_text}>Thống kê</Text>
                <View style={styles.form}>
                    <View style={styles.wrapper_infor}>
                        <Text style={styles.infor_text}>Chi phí:{''}</Text>
                        <TextInput style={styles.infor_input}></TextInput>
                    </View>
                    <View style={styles.wrapper_infor}>
                        {/* <Text style={styles.infor_text}>Hóa đơn:{''}</Text> */}
                        <TouchableOpacity style={styles.bill_button}
                            onPress={pickImage}
                        >
                            <Text style={styles.infor_text}>Hóa đơn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', width: 170, height: 170, backgroundColor: "#ccc" }}>
                        {(imgData) ? <Image source={imgData.source} style={{ width: 170, height: 170 }}></Image> : null}
                    </View>

                </View>
                <TouchableOpacity
                    onPress={() => {
                        var temp = [...data]
                        var temp = temp.filter(item => {
                            if (item.id != currentMission) {
                                return true
                            }
                            else return false
                        })
                        setData(temp)
                        hiddenModal()
                        upload()
                    }}
                    style={styles.button}
                >
                    <Text style={styles.button_text}>XÁC NHẬN</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 30,
        borderRadius: 5
    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20

    },
    wrapper_infor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: 'space-between'

    },
    infor_input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: 200,
        fontSize: 15,
        marginLeft: 5,
        backgroundColor: '#fff'
    },
    infor_text: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    bill_button: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },

    button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 20
    },
    button_text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    form: {
        alignItems: 'center'
    }
})

export default DoneModal
