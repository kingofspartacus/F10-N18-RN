import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../screens/login";
import Register from "../screens/register";
import Forgot_Password from "../screens/forgotpassword";
import {FORGOT_PASSWORD, LOGIN, REGISTER} from "../constants/routeNames";

const AuthNavigator = () =>{
    const AuthStack = createStackNavigator();
    return(
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={LOGIN} component={Login} />
            <AuthStack.Screen name={REGISTER} component={Register} />
            <AuthStack.Screen name={FORGOT_PASSWORD} component={Forgot_Password} />
        </AuthStack.Navigator>
    );
}

export default AuthNavigator