import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import thongbao from '../../data/thongbao';
import DoneModal from './DoneModal';
import NotiModal from './NotiModal';

const Notification = () => {
    const navigation = useNavigation();

    const [data, setData] = useState(thongbao)
    const [currentMission, setCurrentMission] = useState(1)

    const [firstMission, setFirstMission] = useState({
        showModal: false,
        buttonText: 'THỰC HIỆN',
        data: thongbao[0]
    })
    const [secondMission, setSecondMission] = useState({
        showModal: false,
        buttonText: 'THỰC HIỆN',
        data: thongbao[1]
    })

    const [doneModal, setDoneModal] = useState({
        showModal: false,
    })


    const showFirstModal = () => {
        var temp = { ...firstMission }
        temp.showModal = true
        setCurrentMission(1)
        setFirstMission(temp)
    };

    const showSecondModal = () => {
        var temp = { ...secondMission }
        temp.showModal = true
        setCurrentMission(2)
        setSecondMission(temp)
    };

    function renderItem({ item }) {
        return (
            <View style={styles.mission_wrapper}>
                <TouchableOpacity style={styles.noti_details}
                    onPress={
                        (item.id == 1) ?
                            showFirstModal :
                            showSecondModal
                    }
                >
                    <Image source={item.imageUrl} style={styles.noti_image}></Image>
                    <View style={styles.wrapper_noti_text}>
                        <Text style={styles.mission_name}>{item.title}</Text>
                        <Text style={styles.mission_note}>{item.day}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    if(data.length > 0) {
        return (
            <View style={styles.container}>
                <View style={styles.title_wrapper}>
                    <Text style={styles.title_text}>Thông báo</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('DiaryStack')
                        }}
                    >
                        <Text style={{ color: '#666' }}>
                            Xem thêm
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc', marginBottom: 5 }}></View>}
                    style={styles.main_content}
                >
                </FlatList>
                <NotiModal
                    modalState={firstMission}
                    setModalState={setFirstMission}
                    doneModalState={doneModal}
                    setDoneModalState={setDoneModal}
                ></NotiModal>
                <NotiModal
                    modalState={secondMission}
                    setModalState={setSecondMission}
                    doneModalState={doneModal}
                    setDoneModalState={setDoneModal}
                ></NotiModal>
                <DoneModal
                    modalState={doneModal}
                    setModalState={setDoneModal}
                    data={data}
                    setData={setData}
                    currentMission={currentMission}
                ></DoneModal>
            </View>
        ) 
    } else return false
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
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
        paddingTop: 5,
        marginTop: 5,

    },
    mission_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    noti_details: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1

    },
    wrapper_noti_text: {
        flex: 1,
        marginHorizontal: 10,
    },
    noti_image: {
        width: 35,
        height: 35,
    },
    mission_name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    mission_note: {
        color: '#666',
    },
    confirm_button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    confirm_text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12
    }
})

export default Notification
