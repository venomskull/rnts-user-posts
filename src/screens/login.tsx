import React, { FC, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Input, Button} from '../components'

const App: FC = (props) => {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Input placeholder={'Email'} onChangeText={(text) => setEmail(text)} />
            <Input placeholder={'Password'} secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title='Log In' onPress={() => alert('press')} />
            <View style={styles.signupText}>
                <Text style={{marginHorizontal: 5}}>Don't have an Account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('signup')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81, 135, 200, 1)'}}>Sign Up Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        flexDirection: 'row',
        marginVertical: 20
    },
})
