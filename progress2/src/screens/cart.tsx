import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/cartStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cartReducer.cart);
  const onRemoveAll = () => dispatch({ type: 'REMOVE_ALL' })
  const onRemoveItem = (item: any) => () => dispatch({ type: 'REMOVE_ITEM', data: item })
  console.log('data', data)
  const Header = () => {
    return (
      <View>
        <View style={[styles.FLheader]}>
          <Text style={[styles.txtFlheader]}>1 iteam(s): Total (excluding delivery) ₫208,700</Text>
        </View>
      </View>
    )
  }
  const Footer = () => {
    return (
      <View>
        <TouchableOpacity style={[styles.btnViewContent]} onPress={onRemoveAll}>
          <Text style={styles.btnView}>REMOVE ALL</Text>
        </TouchableOpacity>
        <View style={styles.FLfooter}>
          <Text style={[styles.ordersummer]}>Order Summary</Text>
          <View >
            <View style={styles.ContentFt}>
              <Text style={[styles.txtSize15]}>Subtotal</Text>
              <Text style={[styles.txtSize15]}>₫208,700</Text>
            </View>
            <View style={styles.ContentFt}>
              <Text style={[styles.txtSize15]}>Discount</Text>
              <Text style={[styles.txtSize15]}>₫0</Text>
            </View>
            <View style={styles.ContentFt}>
              <Text style={[styles.txtSize20Bold]}>Total</Text>
              <Text style={[styles.txtSize20Bold]}>₫208,700</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.tochaFT}>
            <Text style={[styles.txtSize20Bold]}>PROMOTION CODE</Text>
            <Entypo name='chevron-right' size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.ViewSave}>
          <Text style={[styles.txtSize20Bold]}>SAVE FOR LATER (0)</Text>
        </View>
      </View>
    )
  }
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.RenderContent}>
      <TouchableOpacity style={styles.alightSelf}>
        <Image
          style={styles.renderIMg}
          source={{ uri: item.ImageProduct, }}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.groupIcon}>
          <View style={styles.groupPrice}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.oldPrice}>{item.Price}đ</Text>
              <Text style={styles.newPrice}>{item.Price}đ</Text>
            </View>
            <Text style={styles.greyColor}>{item.NameProduct}</Text>
          </View>
          <TouchableOpacity onPress={onRemoveItem(item)}>
            <Ionicons name='ellipsis-vertical' size={25} style={{ marginTop: 11 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }}>
          <View style={styles.Typecontent}>
            <TouchableOpacity style={styles.ContentShop}>
              <Text style={styles.txtSize14Bold}>{item.Description}</Text>
              <Ionicons name='chevron-down-outline' size={17} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ContentType}>
              <Text style={styles.txtSize14Bold}>{item.IDManufacturer}</Text>
              <Ionicons name='chevron-down-outline' size={17} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.contentQuantity}>
            <Text style={styles.txtSize14Bold}>Số lượng: {item.quantity}</Text>
            <Ionicons name='chevron-down-outline' size={17} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <View style={[styles.header]}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.nameScreen]}>CART.</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.IDProduct.toString()}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        style={{ height: 650 }}
      />
      <View style={[styles.footer]}>
        <TouchableOpacity style={[styles.btnCheckout]}>
          <Text style={styles.txtCheckout}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart
