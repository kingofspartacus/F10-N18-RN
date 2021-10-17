import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import productData from "../data/productData";
import { getCategory, getProduct } from "../services/api";
import HomeImgFooter from "../data/HomeImgFooter";
import styles from "../styles/homeMainStyles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IdCategory {
  IDManufacturer: string;
  NameManufacturer: string;
  ImageManufacturer: string;
};
interface dataProduct {
  IDProduct: string;
  NameProduct: string;
  Price: string;
  Description: string;
  ImageProduct: string;
  IDManufacturer: string;
};

const homeMain = ({ navigation }: { navigation: any }) => {
  const [categoryDataApi, setCategoryDataApi] = useState<IdCategory>();
  const [productDataApi, setProductDataApi] = useState<dataProduct>();
  const [dataGroup, setDataGroup] = useState();
  const getApiProduct = async () => {
    const result = await getProduct()
    setProductDataApi(result.data.data)
  };
  const getApiCategory = async () => {
    const result = await getCategory();
    setCategoryDataApi(result.data.data);
  };
  useEffect(() => {
    getApiCategory();
    getApiProduct();
  }, [])
  const groupData = categoryDataApi?.map((e: any) => ({
    category: e,
    dataList: productDataApi?.filter((element: any) => element.IDManufacturer == e.IDManufacturer),
  }));
  console.log("groupData", groupData)
  const [text, onChangeText] = React.useState("Useless Text");
  const onMoveToProduct = (data: any) => () => {
    navigation.navigate('productList', { productList: data });
  }
  let quantytity: any = []
  for (let i = 0; i < categoryDataApi?.length; i++) {
    quantytity = categoryDataApi?.map((e: any) => e.IDManufacturer)[i]
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
          data={productDataApi}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity >
                <Image source={{ uri: item.ImageProduct }} style={styles.imgFl} resizeMode="cover" />
                <Text style={styles.txtProduct}>{item.Price}đ</Text>
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
            HomeImgFooter.map((e: any, i: any) => {
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
        data={groupData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.bttn} onPress={onMoveToProduct(item)} >
              <Image source={{ uri: item.category.ImageManufacturer }} style={styles.imgbttn} resizeMode="cover" />
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
