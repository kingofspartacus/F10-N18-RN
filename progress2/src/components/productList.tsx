import React from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const productL = ({ route }: { route: any }) => {
  const { productList } = route.params;
  let quantytity: any = []
  for (let i = 0; i < productList.length; i++) {
    quantytity = productList.map((e: { id: any[]; }) => e.id)[i]
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
        <Text style={styles.title}>{ }</Text>
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
        data={productList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.Flat}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={onMoveToDetail(item)} >
                <Image
                  source={{ uri: item.url }}
                  style={styles.ProductImg}
                />
              </TouchableOpacity>
              <View style={styles.tleIn4}>
                <Text style={styles.proTle}>{item.title}</Text>
                <Text style={styles.proPrice}>{item.price}đ</Text>
                <TouchableOpacity>
                  <Ionicons name={'heart-outline'} size={25} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.proTle}>{item.type} + {item.shop}</Text>
              </View>
            </View>
          )
        }}
        ListHeaderComponent={Header}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },
  headerFl: {
    marginTop: 5
  },
  txtHeaderFl: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#bdbdbd'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10
  },
  tleIn4: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  proTle: { fontSize: 13, color: 'grey', marginLeft: 10 },
  proPrice: { fontSize: 18, fontWeight: 'bold', color: '#FF4000', },
  btnHeader: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',

  },
  viewContent: {
    width: 1,
    height: 13,
    backgroundColor: 'silver'
  },
  txtTitle: {
    marginRight: 8,
    color: 'black',
    fontSize: 16
  },
  ProductImg: {
    width: 185,
    height: 250,
    margin: 5,
  },
  Flat: {
    backgroundColor: 'white',
    height: 'auto'
  },
})
export default productL

function e(e: any): any {
  throw new Error('Function not implemented.');
}
function dataDetail(arg0: string, dataDetail: any) {
  throw new Error('Function not implemented.');
}

