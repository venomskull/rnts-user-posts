import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface props {
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void; 
}

const input: FC<props> = (props) => {
    return (
        <View>
            <TextInput onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry} 
                placeholder={props.placeholder}
            />
        </View>
    )
}

export default input

const styles = StyleSheet.create({})
