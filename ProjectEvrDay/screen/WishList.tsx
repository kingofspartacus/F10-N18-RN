import React from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import styles from '../StyleSheet/WishlistTS'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DATA1 from '../FakeData/HomeDT2'

const WishList = () => {
    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.ren}>
            <Image
                source={{ uri: item.img }}
                style={styles.img}
            />
            <View style={styles.body}>
                <Text>600$</Text>
            </View>
            <Ionicons name={'ellipsis-vertical'} size={24} style={{marginTop:10}}/>
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
                data={DATA1}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.fList}
            />
        </View>
    )
}

export default WishList
