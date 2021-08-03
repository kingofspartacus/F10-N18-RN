import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home'
import WishList from '../screen/WishList'
import Cart from '../screen/Cart'
import Me from '../screen/Me'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name={'home-outline'} size={23} color={focused ?'#000' : 'grey'}/>
            </View>
          },
        }}/>
        <Tab.Screen name="WishList" component={WishList}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name={'heart-outline'} size={23} color={focused ?'#000' : 'grey'}/>
            </View>
          },
        }}/>
        <Tab.Screen name="Cart" component={Cart}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name={'cart-outline'} size={23} color={focused ?'#000' : 'grey'}/>
            </View>
          },
        }}/>
      <Tab.Screen name="Me" component={Me}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name={'person-outline'} size={23} color={focused ?'#000' : 'grey'}/>
            </View>
          },
        }}/>
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
