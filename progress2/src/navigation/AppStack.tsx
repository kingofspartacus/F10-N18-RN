import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import homeMain from '../screens/homeMain';
import wishList from '../screens/wishList';
import cart from '../screens/cart';
import me from '../screens/me';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const StackHome = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{ header: () => null, }} name="homeMain" component={homeMain} />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  return (
    <NavigationContainer>
      <Bottom.Navigator initialRouteName="Trang chủ" screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarLabel: ({ focused }) => {
          let lable;
          switch (route.name) {
            case 'Trang chủ':
              return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }} >Trang chủ</Text>;
            case 'Yêu thích':
              return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }}>Yêu thích</Text>;
            case 'Giỏ Hàng':
              return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }}>Giỏ Hàng</Text>;
            case 'Thông tin':
              return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }}>Thông tin</Text>;

          }
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Trang chủ") {
            iconName = focused ? "home" : "home-outline"
            return <Ionicons name={iconName} size={25} color={"#000"} />
          }
          else if (route.name === "Yêu thích") {
            iconName = focused ? "heart" : "heart-outline"
            return <Ionicons name={iconName} size={25} color={"#000"} />
          }
          else if (route.name === "Giỏ Hàng") {
            iconName = focused ? "cart" : "cart-outline"
            return <Ionicons name={iconName} size={25} color={"#000"} />
          }
          else if (route.name === "Thông tin") {
            iconName = focused ? "person" : "person-outline"
            return <Ionicons name={iconName} size={25} color={"#000"} />
          }
        }
      })}>
        <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Trang chủ" component={StackHome} />
        <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Yêu thích" component={wishList} />
        <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Giỏ Hàng" component={cart} />
        <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Thông tin" component={me} />
      </Bottom.Navigator>
    </NavigationContainer>
  )
}
export default AppStack