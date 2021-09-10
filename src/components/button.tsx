import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface props {
    title: string;
    onPress: () => void;
}

const Button: FC<props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    text: {
        color: '#fff'
    }
})
