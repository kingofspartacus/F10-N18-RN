import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Wishlist from '../Screens/Wishlist'
import Cart from '../Screens/Cart'
import Me from '../Screens/Me'
import Home from '../Screens/Home';

const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab =()=>{
  return(
    <Bottom.Navigator
      initialRouteName="Home"
      
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarIcon: ({focused}) => {
          let iconName;
          let color;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'heart-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Cart') {
            iconName = focused ? 'reader' : 'reader-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Me') {
            iconName = focused ? 'person' : 'person-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          }
        },

        tabBarLabel: ({focused}) => {
          let lable;
          switch (route.name) {
            case 'Home':
              return (lable = <Text style={styles.textactive}>Home</Text>);
            case 'Wishlist':
              return (lable = <Text style={styles.textactive}>Wishlist</Text>);
            case 'Cart':
              return (lable = <Text style={styles.textactive}>Cart</Text>);
            case 'Me':
              return (lable = <Text style={styles.textactive}>Me</Text>);
          }
        },
        tabBarStyle: {
            height:60,
        }
      })}
     
      >
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Wishlist" component={Wishlist} />
      <Bottom.Screen name="Cart" component={Cart} />
      <Bottom.Screen name="Me" component={Me} />
    </Bottom.Navigator>
  )
}
export default function Appstack() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    textactive: {
        color: '#585858',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 2,
      },
})

