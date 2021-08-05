import React, { Component } from 'react'
import { View, Text, Image, StatusBar, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


const detail = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const { detail } = route.params;
  console.log('detail', detail)
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name={'arrow-back-outline'} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ backgroundColor: 'silver', width: '100%' }}>
        <View style={styles.wrapper}>
          <StatusBar barStyle="light-content" />
        </View>
        <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'white' }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>₫783,400</Text>
            <Text style={{ color: 'silver' }}>Classic Fit Ornate Print Shirt</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', marginTop: 2 }}>
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
            </View>
            <Text style={{ marginTop: 12 }}>(5)</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <StatusBar barStyle="light-content" />
        </View>
        <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'white' }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>₫783,400</Text>
            <Text style={{ color: 'silver' }}>Classic Fit Ornate Print Shirt</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', marginTop: 2 }}>
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
              <Entypo name='star' size={20} style={{ marginTop: 11, color: 'yellow' }} />
            </View>
            <Text style={{ marginTop: 12 }}>(5)</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ width: '100%', height: 100, backgroundColor: 'white', flexDirection: 'row' }}>
        <View>
          <TouchableOpacity style={{ backgroundColor: 'brown', width: 40, height: 40, borderRadius: 20, marginLeft: 20, marginTop: 25 }}>
          </TouchableOpacity>
          <Text style={{ marginLeft: 15 }}>MOCHA</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'black', width: '60%', height: 40, marginLeft: 20, marginTop: 25 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 5 }}>ADD TO CARD</Text>
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={35} style={{ marginLeft: 10, marginTop: 27 }} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },
  wrapper: {
    width: '100%',
    height: 550,
  },
})
export default detail
