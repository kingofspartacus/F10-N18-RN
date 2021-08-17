import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/Login'
import Signin from '../Screen/Signin'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../Screen/StartScreen'
const Stack = createNativeStackNavigator();
const Auth = createNativeStackNavigator();

const Authen = () => {
    return (
        <Auth.Navigator initialRouteName="Login">
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Signin" component={Signin} />
        </Auth.Navigator>
    )
}
const StackNavi = () => {
    return (
        <Stack.Navigator initialRouteName="StartScreen">
            <Auth.Screen name="StartScreen" component={StartScreen} />
        </Stack.Navigator>
    )
}
export default function Navi() {
    return (
        <NavigationContainer>
            <Authen />
        </NavigationContainer>
    )
}
