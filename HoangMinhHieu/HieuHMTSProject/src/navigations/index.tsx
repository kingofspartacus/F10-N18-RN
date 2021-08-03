import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNavContainer = () =>{

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <NavigationContainer>
            {isAuthenticated ? <HomeNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default AppNavContainer