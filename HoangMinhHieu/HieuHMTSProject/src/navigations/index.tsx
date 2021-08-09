import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { useGlobalContext } from '../context/Provider';

const AppNavContainer = () =>{

    const {authState : {isLoggedIn}} = useGlobalContext()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <NavigationContainer>
            {isLoggedIn ? <HomeNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default AppNavContainer