import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
    id: 1,
    photo: 'https://duhocminhkhang.com/wp-content/uploads/2020/01/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-%C4%91eo-m%E1%BA%AFt-k%C3%ADnh-c%E1%BB%B1c-cute-10-1.jpg',
    name: 'Square Tinted Sunglasses',
    price: '₫208,700',
    color: 'BLACK/BLACK',
    size: 'ONE SIZE',
    qty: 'QTY :1'
  },
  {
    id: 2,
    photo: 'https://i.pinimg.com/originals/46/74/8b/46748bdff8ff715319bf9e86d1b9201a.jpg',
    name: 'Satin Crisscross Slip Dress',
    price: '₫783,400',
    color: 'GOLD',
    size: 'S',
    qty: 'QTY :5'
  },
  {
    id: 3,
    photo: 'https://1.bp.blogspot.com/-DUDvPU12VbI/XxGFKlzYrOI/AAAAAAAAqlQ/4xT6fgXW7yQur0-lpFAVMtImYOoOufkuwCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan-deo-kinh%2B%252870%2529.jpg',
    name: 'Basic Cotton-Blend Cami',
    price: '₫78,100',
    color: 'BLACK',
    size: 'XS',
    qty: 'QTY :4'
  }
]
const WishList = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={{ height: 200, flexDirection: 'row', borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <Image
          style={{ width: 120, height: 170, marginLeft: 10 }}
          source={{ uri: item.photo, }}
        />
      </TouchableOpacity>
      <View>
        <View style={{ flexDirection: 'row', height: '50%' }}>
          <View style={{ marginTop: 11, marginLeft: 10, width: 230 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.price}</Text>
            <Text style={{ color: 'silver' }}>{item.name}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name='ellipsis-vertical' size={25} style={{ marginTop: 11 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }}>
          <View style={{ flexDirection: 'row', height: 50, marginLeft: 10, marginRight: 10 }}>
            <TouchableOpacity style={{ flexDirection: 'row', borderRightColor: 'silver', borderRightWidth: 1, width: '39%', height: '50%', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.color}</Text>
              <Ionicons name='chevron-down-outline' size={17} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', width: '39%', height: '50%', justifyContent: 'space-between', marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.size}</Text>
              <Ionicons name='chevron-down-outline' size={17} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', width: '37%', height: '50%', justifyContent: 'space-between', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.qty}</Text>
            <Ionicons name='chevron-down-outline' size={17} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={[{ marginTop: 10 }]}>
      <View style={[{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', height: 40, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center' }]}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[{ marginRight: 160, fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }]}>WishList.</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={{
            height: 585
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  ImageWL: {
    width: 120,
    height: 210,
    marginLeft: 18,
    marginTop: 15,
    marginRight: 15,
  },
})
export default WishList
