import React, { Component } from 'react'
import { View, Text, Image, FlatList, StatusBar, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/detailStyle';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";

const detail = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const { detail } = route.params;
  const dispatch = useDispatch();
  const onAddCart = () => {
    dispatch({ type: 'ADD_CART', detail: detail })
  }
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name={'arrow-back-outline'} size={30} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: detail.url }}
        style={styles.ImgDetail}
      />
      <View style={styles.priceContent} >
        <View style={{ marginTop: 10 }}>
          <Text style={styles.txtPrice}>₫{detail.price}</Text>
          <Text style={{ color: 'silver' }}>{detail.title}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.startContent}>
            <Entypo name='star' size={20} style={styles.star} />
            <Entypo name='star' size={20} style={styles.star} />
            <Entypo name='star' size={20} style={styles.star} />
            <Entypo name='star' size={20} style={styles.star} />
            <Entypo name='star' size={20} style={styles.star} />
          </View>
          <Text style={{ marginTop: 12 }}>(5)</Text>
        </View>

      </View>
      <View style={styles.groupBtn}>
        <View>
          <TouchableOpacity style={styles.btnMocha}>
          </TouchableOpacity>
          <Text style={styles.maginLeft10}>MOCHA</Text>
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={onAddCart}>
          <Text style={styles.txtAdd}>ADD TO CARD</Text>
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={35} style={styles.maginLeft10} />
      </View>
    </View>
  )
}

export default detail
