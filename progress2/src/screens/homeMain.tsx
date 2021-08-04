import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import homeFlFooter from "../components/homeFlFooter";
import productData from "../data/productData";
import HomeImg from "../data/HomeImg";
import HomeImgFooter from "../data/HomeImgFooter";
import { getProduct } from "../sevices/api";
import { getCate } from "../sevices/api";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import data from "../data/productData";


const homeMain = ({ }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  let b: any = []
  for (let i = 0; i < productData.length; i++) {
    b = b.concat(productData[i].dataMenu)
    //b = productData.map(e => e.dataMenu[i])
  }
  console.log('b', b)
  // const data = productData.map(e => e.dataMenu)
  // const [product, setProduct] = useState()
  // const [categoryList, setCategoryList] = useState();
  // const [cate, setCate] = useState(); // category Ids
  // useEffect(() => {
  //   const getApiProduct = async () => {
  //     const result = await getProduct()
  //     setProduct(result.data.data)
  //   }
  //   const getCategoryIds = async () => {
  //     const result = await getCate();
  //     setCate(result.data.map((e: { id: any; }) => e.id));
  //     setCategoryList(result.data);
  //   };
  //   getCategoryIds()
  //   getApiProduct()
  // }, [])

  const Header = () => {
    return (
      <View style={{ marginTop: 5 }}>
        <Text style={{ textAlign: 'center', textDecorationLine: 'underline', fontWeight: 'bold', color: '#bdbdbd' }} >All Special Offers(11)</Text>
      </View>
    )
  }
  const Footer = () => {
    return (
      <View >
        <FlatList
          horizontal
          data={b}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity >
                <Image source={{ uri: item.url }} style={{
                  width: 130,
                  height: 200,
                  margin: 5,
                  justifyContent: 'space-evenly'
                }} resizeMode="cover" />
                <Text style={{ fontSize: 20, margin: 5 }}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.categoryId?.toString()}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={[{ fontSize: 30, marginBottom: 8, fontWeight: 'bold' }]}>Shop the 'Gram</Text>
          <Text style={[{ fontSize: 15 }]}>Upload your favorite SB outfit on Instagram with</Text>
          <Text style={[{ fontSize: 15 }]}>#Forever21Men for a chance to be featured!</Text>
          <Text style={[{ fontSize: 20 }]}>@SADBOYsMen</Text>
        </View>
        <View style={{ flexDirection: 'row', width: 435, flexWrap: 'wrap-reverse', justifyContent: 'center', alignItems: 'center' }}>
          {
            HomeImgFooter.map((e: { id: React.Key | null | undefined; url: any; }, i: any) => {
              return (
                <View key={e.id} style={{ margin: 10 }}>
                  <Image source={{ uri: e.url }} style={{ width: 190, height: 190 }} />
                </View>
              )
            })
          }
        </View>
        <TouchableOpacity style={[{ alignSelf: 'center', backgroundColor: '#848484', marginTop: 5, width: '20%', height: 30, marginBottom: 10 }]}>
          <Text style={styles.btnView}>VIEW MORE</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={35} style={{ margin: 10 }} />
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginTop: 10, marginLeft: 50 }}>SADBOIs HANOI</Text>
      </View>
      <View style={styles.Seach_title}>
        <TouchableOpacity style={[{ flex: 1, flexDirection: 'row', alignItems: 'center' }]}>
          <Ionicons name="search-sharp" size={25} style={{ marginLeft: 20 }} />
          <TextInput style={{ width: '90%', height: 60, marginLeft: 5 }}
            onChangeText={onChangeText}
            placeholder="Search"
            placeholderTextColor={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[{ flex: 1, flexDirection: 'row' }]}>
          <FontAwesome name="microphone" size={20} style={{ marginLeft: 120 }} />
          <Ionicons name="md-scan" size={20} style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={HomeImg}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }}  >
              <Image source={{ uri: item.url }} style={{ width: '100%', height: 230 }} resizeMode="cover" />
            </TouchableOpacity>
          )
        }}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </View>

  )
};
const styles = StyleSheet.create({
  content: {
    height: '100%'
  },
  header: {
    height: 50,
    flexDirection: 'row'
  },
  Seach_title: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
  },

  btnView: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5
  },

});
export default homeMain;
