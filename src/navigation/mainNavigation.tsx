import { NavigationContainer } from '@react-navigation/native';
import React, {useState, FC, useEffect } from 'react';
import { View, Text } from 'react-native'
import AppStack from './appstack';
import AuthStack from './authstack';
import firebase from 'firebase'; 
import { auth } from '../constants/firebase';


const MainNav: FC = () => {
    const [user, setUser] = useState<any>(null);

    // const bootstrap = () => {
    //     firebase.auth().onAuthStateChanged(_user => {
    //         if(_user){
    //             setUser(_user)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     bootstrap()
    // }, [])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            console.log(authUser);
            if (authUser) {
                setUser(authUser);
            }
        })
        return unsubscribe;
    }, []);

    return (
        <NavigationContainer>
            {user !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNav;

