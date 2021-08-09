import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import styles from '../styles/wishListStyle';
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
    <View style={styles.rederItemContent}>
      <TouchableOpacity style={styles.alignSelf}>
        <Image
          style={styles.imgItem}
          source={{ uri: item.photo, }}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.priceContent}>
          <View style={styles.priceContent2}>
            <Text style={styles.Size15Bold}>{item.price}</Text>
            <Text style={styles.Colorsilver}>{item.name}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name='ellipsis-vertical' size={25} style={styles.marginTop10} />
          </TouchableOpacity>
        </View>
        <View style={styles.height100}>
          <View style={styles.groupIn4}>
            <TouchableOpacity style={styles.btnColor}>
              <Text style={styles.Size15Bold}>{item.color}</Text>
              <Ionicons name='chevron-down-outline' size={17} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.Size15Bold}>{item.size}</Text>
              <Ionicons name='chevron-down-outline' size={17} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.Size15Bold}>{item.qty}</Text>
            <Ionicons name='chevron-down-outline' size={17} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={[styles.marginTop10]}>
      <View style={[styles.header]}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.screenName]}>WishList.</Text>
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

export default WishList
