import React, { FC } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface props {
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void; 
}

const {height, width} = Dimensions.get('screen');

const Input: FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry || false} 
                style={styles.input} placeholder={props.placeholder}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        borderRadius: 5,
        backgroundColor: '#e3e3e3',
        alignSelf: 'center',
        marginVertical: 10,
    },
    input: {
        padding: 15,
    },
})
