import React, { FC, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Input } from '../components'
import { auth } from '../constants/firebase';

const App: FC = (props) => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const signup = async () => {
        if (name && email && password) {
            try {
                const user = await auth.createUserWithEmailAndPassword(email, password);
                if (user) {
                    alert(JSON.stringify(user));
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            alert('Error. Missing Fields')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Input placeholder={'Name'} onChangeText={(text) => setName(text)} />
            <Input placeholder={'Email'} onChangeText={(text) => setEmail(text)} />
            <Input placeholder={'Password'} secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title='Sign Up' onPress={signup} />
            <View style={styles.loginText}>
                <Text style={{marginHorizontal: 5}} >Already have an Account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('login')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81, 135, 200, 1)'}}>Login Here</Text>
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
    loginText: {
        flexDirection: 'row',
        marginVertical: 20,
    },
})
