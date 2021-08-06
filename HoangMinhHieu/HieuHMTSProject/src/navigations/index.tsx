import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { useGlobalContext } from '../context/Provider';

const AppNavContainer = () =>{

    const {authState} = useGlobalContext()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    console.log(authState)

    return(
        <NavigationContainer>
            {/* {authState ? <HomeNavigator/> : <AuthNavigator/>} */}
            {authState ? <AuthNavigator/>:<HomeNavigator/>}
            {/* <AuthNavigator/> */}
        </NavigationContainer>
    );
}

export default AppNavContainer