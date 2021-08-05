import React from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import styles from '../StyleSheet/WishlistTS'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DATA from '../FakeData/DATA'

const WishList = () => {
    let detail :any = []
    for(let i=0;i < DATA.length;i++)
    {
        detail= detail.concat(DATA[i].dataList)
      
    }
    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.ren}>
            <Image
                source={{ uri: item.img }}
                style={styles.img}
            />
            <View style={styles.comp}>
                <View style={styles.top}>
                    <View style={styles.body}>
                        <Text>{item.price}$</Text>
                        <Text>{item.name}</Text>
                    </View>
                    <Ionicons name={'ellipsis-vertical'} size={24} style={{ marginTop: 10 }} />
                </View>
                <View style={styles.size}>
                    <Text>Size:{item.size}</Text>
                </View>
            </View>
        </View>
    )
    return (
        <View style={{ height: '100%' }}>
            <View style={styles.header}>
                <Text style={styles.Title}>WISHLIST</Text>
            </View>
            <View style={styles.numb}>
                <Text style={styles.numberT}>x Item(s)</Text>
            </View>
            <FlatList
                data={detail}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.fList}
            />
        </View>
    )
}

export default WishList
