import React,{useState} from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../StyleSheet/CartTS'
import DATA from '../FakeData/DATA'

const Cart = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.Title}>CART</Text>
            </View>
        </View>
    )
}

export default Cart
