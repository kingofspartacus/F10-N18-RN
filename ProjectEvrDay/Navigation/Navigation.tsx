import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../StyleSheet/NavigationTS'
import Home from '../screen/Home'
import WishList from '../screen/WishList'
import Cart from '../screen/Cart'
import Me from '../screen/Me'
import ListPrd from '../screen/ListPrd'
import Detail from '../screen/Detail'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={styles.tab}>
            <Ionicons name={'home-outline'} size={23} color={focused ? '#000' : 'silver'} />
            <Text>Home</Text>
          </View>
        },
      }} />
      <Tab.Screen name="WishList" component={WishList} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={styles.tab}>
            <Ionicons name={'heart-outline'} size={23} color={focused ? '#000' : 'silver'} />
            <Text>WishList</Text>
          </View>
        },
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={styles.tab}>
            <Ionicons name={'lock-closed-outline'} size={23} color={focused ? '#000' : 'silver'} />
            <Text>Cart</Text>
          </View>
        },
      }} />
      <Tab.Screen name="Me" component={Me} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={styles.tab}>
            <Ionicons name={'person-outline'} size={23} color={focused ? '#000' : 'silver'} />
            <Text>Me</Text>
          </View>
        },
      }} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="ListPrd" component={ListPrd}  />
        <Stack.Screen name="Detail" component={Detail}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
