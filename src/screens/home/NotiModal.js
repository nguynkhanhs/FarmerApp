import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';


const NotiModal = (props) => {
    var { modalState, setModalState, doneModalState, setDoneModalState } = props
    var {data} = modalState

    const hiddenModal = () => {
        var temp = {...modalState}
        temp.showModal = false
        setModalState(temp)
    }

    const showDoneModal = () => {
        var temp = {...doneModalState}
        temp.showModal = true;
        setDoneModalState(temp)
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
                <Text style={styles.title_text}>{data.title}</Text>
                <Text style={styles.day_text}>{data.time}</Text>
                <Text style={styles.content_text}>{data.content}</Text>
                <TouchableOpacity
                    onPress={()=>{
                        
                        var temp = {...modalState}
                        if(temp.buttonText === 'THỰC HIỆN') {
                            temp.buttonText = 'HOÀN THÀNH'
                        } else if (temp.buttonText === 'HOÀN THÀNH') {
                            hiddenModal()
                            showDoneModal(data.id)
                        }
                        temp.showModal = false
                        setModalState(temp)
                    }
                }
                    style={styles.button}
                >
                    <Text style={styles.button_text}>{modalState.buttonText}</Text>
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
        paddingHorizontal: 30,
        borderRadius: 5
    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    day_text: {
        marginBottom: 20

    },
    content_text: {
        marginBottom: 35,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'rgba(6, 187, 121, 1)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    button_text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default NotiModal
