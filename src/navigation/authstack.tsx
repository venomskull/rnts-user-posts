import React, { FC } from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { Login, SignUp } from '../screens'

const {Navigator, Screen} = createStackNavigator()

const AuthStack: FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}} >
            <Screen name='signup' component={SignUp} />
            <Screen name='login' component={Login} />
        </Navigator>
    )
}

export default AuthStack
