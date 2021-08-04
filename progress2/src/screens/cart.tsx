import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
    id: 1,
    photo: 'https://duhocminhkhang.com/wp-content/uploads/2020/01/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-%C4%91eo-m%E1%BA%AFt-k%C3%ADnh-c%E1%BB%B1c-cute-10-1.jpg',
    name: 'Square Tinted Sunglasses',
    old_price: '₫208,700',
    new_price: '₫208,700',
    color: 'BLACK/BLACK',
    size: 'ONE SIZE',
    qty: 'QTY :1'
  },
  {
    id: 2,
    photo: 'https://i.pinimg.com/originals/46/74/8b/46748bdff8ff715319bf9e86d1b9201a.jpg',
    name: 'Satin Crisscross Slip Dress',
    old_price: '₫208,700',
    new_price: '₫208,700',
    color: 'GOLD',
    size: 'S',
    qty: 'QTY :5'
  },
  {
    id: 3,
    photo: 'https://1.bp.blogspot.com/-DUDvPU12VbI/XxGFKlzYrOI/AAAAAAAAqlQ/4xT6fgXW7yQur0-lpFAVMtImYOoOufkuwCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan-deo-kinh%2B%252870%2529.jpg',
    name: 'Basic Cotton-Blend Cami',
    old_price: '₫208,700',
    new_price: '₫208,700',
    color: 'BLACK',
    size: 'XS',
    qty: 'QTY :4'
  }
]
const Cart = () => {
  const Header = () => {
    return (
      <View>
        <View style={[{ alignItems: 'center', height: 40, borderBottomWidth: 1, borderBottomColor: '#d9d9d9' }]}>
          <Text style={[{ fontSize: 15, color: 'silver' }]}>1 iteam(s): Total (excluding delivery) ₫208,700</Text>
        </View>
      </View>
    )
  }
  const Footer = () => {
    return (
      <View>
        <View style={{ backgroundColor: 'silver', height: 180 }}>
          <Text style={[{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }]}>Order Summary</Text>
          <View >
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={[{ fontSize: 15 }]}>Subtotal</Text>
              <Text style={[{ fontSize: 15 }]}>₫208,700</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={[{ fontSize: 15 }]}>Discount</Text>
              <Text style={[{ fontSize: 15 }]}>₫0</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={[{ fontSize: 20, fontWeight: 'bold' }]}>Total</Text>
              <Text style={[{ fontSize: 20, fontWeight: 'bold' }]}>₫208,700</Text>
            </View>
          </View>
          <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 40, justifyContent: 'space-between' }}>
            <Text style={[{ fontSize: 20, fontWeight: 'bold' }]}>PROMOTION CODE</Text>
            <Entypo name='chevron-right' size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, height: 40, borderBottomColor: '#F2F2F2', borderBottomWidth: 1, alignSelf: 'center' }}>
          <Text style={[{ fontSize: 25, fontWeight: 'bold' }]}>SAVE FOR LATER (0)</Text>
        </View>
        <View style={{ marginTop: 20, height: 60, borderBottomColor: '#F2F2F2', borderBottomWidth: 1, alignSelf: 'center' }}>
          <Text>There are no iteam in save for later</Text>
        </View>
      </View>
    )
  }
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
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 15 }}>{item.old_price}</Text>
              <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 15, marginLeft: 10 }}>{item.new_price}</Text>
            </View>
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
    <View>
      <View style={[{ borderBottomWidth: 1, borderBottomColor: '#d9d9d9', height: 40, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center' }]}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[{ marginRight: 160, fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }]}>CART.</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        style={{ height: 650 }}
      />
      <View style={[{ alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#d9d9d9', borderTopWidth: 1, borderTopColor: '#d9d9d9', height: 50 }]}>
        <TouchableOpacity style={[{ marginTop: 5, alignItems: 'center', backgroundColor: '#F7FE2E', height: 40, width: '90%' }]}>
          <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: 20 }}>CHECKOUT</Text>
        </TouchableOpacity>
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
export default Cart
