import React, { Component } from 'react'
import { View, Text, Image, FlatList, StatusBar, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


const detail = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const { detail } = route.params;
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name={'arrow-back-outline'} size={30} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: detail.url }}
        style={{
          width: '100%',
          height: '68%',
          margin: 5,
        }}
      />
      <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'white' }} >
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>₫{detail.price}</Text>
          <Text style={{ color: 'silver' }}>{detail.title}</Text>
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
      <View style={{ width: '100%', height: 100, backgroundColor: 'white', flexDirection: 'row' }}>
        <View>
          <TouchableOpacity style={{ backgroundColor: 'brown', width: 40, height: 40, borderRadius: 20, marginLeft: 20, }}>
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>MOCHA</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'black', width: '60%', height: 40, marginLeft: 30, }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 5 }}>ADD TO CARD</Text>
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={35} style={{ marginLeft: 10, }} />
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
})
export default detail
