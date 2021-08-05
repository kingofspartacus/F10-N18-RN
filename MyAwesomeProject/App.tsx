import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './Screens/Home'
import Wishlist from './Screens/Wishlist'
import Navigation from './Navigation/Appstack'
import { NavigationContainer } from '@react-navigation/native';
import Product from './Screens/Product'
const App = () => {
  return (
      <Navigation/>
  )
}

export default App

const styles = StyleSheet.create({})
