import React, {useContext} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/home";
import {HOME} from "../constants/routeNames";

const HomeNavigator = () =>{
    const HomeStack = createStackNavigator();

    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name={HOME} component={Home} />
        </HomeStack.Navigator>
    );
}

export default HomeNavigator