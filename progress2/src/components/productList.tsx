import React from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/productListStyle';
const productL = ({ route }: { route: any }) => {
  const { productList } = route.params;
  const dataListProduct = productList.dataList
  let quantytity: any = []
  for (let i = 0; i < dataListProduct.length; i++) {
    quantytity = dataListProduct.map((e: any) => e.IDProduct)[i]
  }
  const navigation = useNavigation();
  const onMoveToDetail = (dataDetail: any) => () => {
    navigation.navigate('detail', { detail: dataDetail });
  }
  const Header = () => {
    return (
      <View style={styles.headerFl}>
        <Text style={styles.txtHeaderFl} >{quantytity} styles</Text>
      </View>
    )
  }
  return (
    <View style={{ height: "100%" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name={'arrow-back-outline'} size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>{productList.category.NameManufacturer}</Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnHeader}>
          <Text style={styles.txtTitle}>SORT</Text>
          <Ionicons name={'chevron-down'} size={18} />
        </TouchableOpacity>
        <View style={styles.viewContent} />
        <TouchableOpacity style={styles.btnHeader}>
          <Text style={styles.txtTitle}>REFINE</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataListProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.Flat}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={onMoveToDetail(item)} >
                <Image
                  source={{ uri: item.ImageProduct }}
                  style={styles.ProductImg}
                />
              </TouchableOpacity>
              <View style={styles.tleIn4}>
                <Text style={styles.proTle}>{item.title}</Text>
                <Text style={styles.proPrice}>{item.Price}đ</Text>
                <TouchableOpacity>
                  <Ionicons name={'heart-outline'} size={25} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.proTle}>Sp: {item.type}, Shop: {item.shop}</Text>
              </View>
            </View>
          )
        }}
        ListHeaderComponent={Header}
      />
    </View>
  )
}
export default productL

