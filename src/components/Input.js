import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
// import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Input = React.forwardRef((props, ref) => {
    var DisplayIcon = null;
    if(props.subIcon) {
        DisplayIcon = props.subIcon
    } else {
        DisplayIcon = <Icon
            name={props.iconName}
            size={35}
            color='rgba(6, 187, 121, 0.6)'
        />
    }



    return (
        <View style={styles.wrapper_input}>
            {DisplayIcon}
            <TextInput
                ref={ref}
                placeholder={props.placeholder}
                style={styles.input}
                secureTextEntry={props.secure}
                returnKeyType={props.returnKey}
                onSubmitEditing={() => {
                    if (props.refNext) {
                        props.refNext.current.focus()
                    }
                }}

            >
            </TextInput>
        </View>
    )
})

var styles = StyleSheet.create({
    wrapper_input: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        paddingLeft: 10,
        marginBottom: 15,


    },
    input: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        color: '#666'
    }
})

export default Input
