import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeImg = [
  {
    id: 1,
    url: 'https://images-na.ssl-images-amazon.com/images/I/71G9Hu4jXBL._SL1500_.jpg'
  },
  {
    id: 2,
    url: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/20/xxmeofficial1756897801413789146215604407732069441351738n-1618895602090587322263.jpg'
  },
  {
    id: 3,
    url: 'https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1663133924161537.jpeg'
  },
  {
    id: 4,
    url: 'http://product.hstatic.net/200000159059/product/109792839_3093762574026608_9053821329387390614_o_b8f0e028dddf42fcad6d69d561dacf5a_grande.jpg'
  },
  {
    id: 5,
    url: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/20/nudieye17263614511379702933830587457180962862803337n-16188976070731689022748.jpg'
  },
]
const HomeImgFooter = [
  {
    id: 1,
    url: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw75085461/3_back_750/00435309-01.jpg?sw=400&sh=600'
  },
  {
    id: 2,
    url: 'https://www.arket.com/content/dam/P11/images/campaigns/2021/w13_c_spring-utility/ARKET_21116_C_Spring-ut_3_WEB.jpg'
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/originals/46/74/8b/46748bdff8ff715319bf9e86d1b9201a.jpg'
  },
  {
    id: 4,
    url: 'https://duhocminhkhang.com/wp-content/uploads/2020/01/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-%C4%91eo-m%E1%BA%AFt-k%C3%ADnh-c%E1%BB%B1c-cute-10-1.jpg'
  },
]
const homeMain = ({ }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
  content: { height: '100%' },
  header: { height: 50, flexDirection: 'row' },
  Seach_title: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
  },

  btnView: {
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5
  },

});
export default homeMain;
