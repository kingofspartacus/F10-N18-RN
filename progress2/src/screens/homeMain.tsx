import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import productData from "../data/productData";
import HomeImgFooter from "../data/HomeImgFooter";
import styles from "../styles/homeMainStyles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const homeMain = ({ navigation }: { navigation: any }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const onMoveToProduct = (data:
    {
      id: number; title: string; subtitle:
      { id: number; subtitle1: string; subtitle2: string; }[];
      sold: number; liked: number; url: string; type: string; shop: string; price: number;
    }[]) => () => {
      navigation.navigate('productList', { productList: data });
    }
  let b: any = []
  for (let i = 0; i < productData.length; i++) {
    b = b.concat(productData[i].dataMenu)
  }
  let quantytity: any = []
  for (let i = 0; i < productData.length; i++) {
    quantytity = productData.map(e => e.categoryId)[i]
  }
  const Header = () => {
    return (
      <View style={styles.headerFl}>
        <Text style={styles.txtHeaderFl} >All Special Offers({quantytity})</Text>
      </View>
    )
  }
  const Footer = () => {
    return (
      <View >
        <View style={styles.recently}>
          <Text style={styles.txtrecently}>RECENTLY VIEWED</Text>
          <TouchableOpacity style={styles.btnclear}>
            <Text style={styles.txtrecently}>CLEAR</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={b}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity >
                <Image source={{ uri: item.url }} style={styles.imgFl} resizeMode="cover" />
                <Text style={styles.txtProduct}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id?.toString()}
        />
        <View style={styles.infor}>
          <Text style={[styles.txtIn4]}>Shop the 'Gram</Text>
          <Text style={[styles.txtSize15]}>Upload your favorite SB outfit on Instagram with</Text>
          <Text style={[styles.txtSize15]}>#Forever21Men for a chance to be featured!</Text>
          <Text style={[styles.txtSize20]}>@SADBOYsMen</Text>
        </View>
        <View style={styles.FooterImg}>
          {
            HomeImgFooter.map((e: { id: React.Key | null | undefined; url: any; }, i: any) => {
              return (
                <View key={e.id} style={styles.margin10}>
                  <Image source={{ uri: e.url }} style={styles.imgFooter} />
                </View>
              )
            })
          }
        </View>
        <TouchableOpacity style={[styles.btnViewContent]}>
          <Text style={styles.btnView}>VIEW MORE</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={35} style={styles.margin10} />
        <Text style={styles.title}>SADBOIs HANOI</Text>
      </View>
      <View style={styles.Seach_title}>
        <TouchableOpacity style={[styles.contentSeach]}>
          <Ionicons name="search-sharp" size={25} style={styles.marginLeft20} />
          <TextInput style={styles.inPut}
            onChangeText={onChangeText}
            placeholder="Search"
            placeholderTextColor={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.groupIcon]}>
          <FontAwesome name="microphone" size={20} style={styles.marginLeft120} />
          <Ionicons name="md-scan" size={20} style={styles.marginLeft20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={productData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.bttn} onPress={onMoveToProduct(item.dataMenu)} >
              <Image source={{ uri: item.url }} style={styles.imgbttn} resizeMode="cover" />
            </TouchableOpacity>
          )
        }}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </View>
  )
};
export default homeMain;
