import React, { useState } from 'react'
import { Text, ScrollView, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../StyleSheet/DetailTS'
import { useNavigation } from '@react-navigation/native';


export default function Detail({ route }: { route: any }) {
    const navigation = useNavigation();
    const { Detail } = route.params;
    return (
        <View style={{ height: "100%" }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name={'arrow-back-outline'} size={30} style={styles.iconTop} />
                </TouchableOpacity>
                <Text style={styles.title}>FOREVER 21</Text>
                <TouchableOpacity  >
                    <Ionicons name={'ios-cloud-upload-outline'} size={30} style={styles.iconTop} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.Scroll} showsVerticalScrollIndicator={false}>
                <Image
                    source={{ uri: Detail.img }}
                    style={styles.DTImg}
                />
                <View style={styles.tit}>
                    <Text style={styles.price}>{Detail.price} $</Text>
                    <Text style={styles.name}>{Detail.name}</Text>
                </View>
                <View>

                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View>
                    <Text>ADD TO CART</Text>
                </View>
            </View>
        </View>
    )
}
