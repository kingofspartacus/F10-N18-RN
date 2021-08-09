import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Home } from './screens/HomeScreen';
import { LandingScreen } from './screens/LandingScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Cart from './screens/Cart';

const swichNavigator = createSwitchNavigator({
  // landingStack: {
  //   screen: createStackNavigator({
  //     Landing: LandingScreen,
  //   }, {
  //     defaultNavigationOptions: {
  //       headerShown: false
  //     }
  //   })
  // },
  homeStack: createBottomTabNavigator({

    //Home tab icon
    Home: {
      screen: createStackNavigator({
        HomePage: Home
      }, {
        defaultNavigationOptions: {
          headerShown: false,

        }
      }),

      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./images/home.png') : require("./images/home.png")
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

    //Offer tab icon
    Offer: {
      screen: createStackNavigator({
        OfferPage: Home
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./images/discount.png') : require('./images/discount.png')
          return <Image source={icon} style={styles.tabIcon}></Image>
        }
      }
    },

    //Cart tab icon
    Cart: {
      screen: createStackNavigator({
        CartPage: Cart
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./images/carts.png') : require('./images/carts.png')
          return <Image source={icon} style={styles.tabIcon}></Image>
        }
      }
    },

    //Account tab icon
    Account: {
      screen: createStackNavigator({
        AccountPage: Home
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./images/account.png') : require('./images/account.png')
          return <Image source={icon} style={styles.tabIcon}></Image>
        }
      }
    },
  })
})

const AppNavigation = createAppContainer(swichNavigator)

export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  },
});
