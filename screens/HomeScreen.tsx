import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TextInput, FlatList } from 'react-native';
import Search from "../components/Search-Input";
import data from '../data/Category'
import Trending from '../data/Trending'

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <View style={{ flex: 1, marginTop: 15 }}>
                    <Search></Search>
                </View>
                <View style={{ flex: 2 }}>
                    <FlatList horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginLeft: 10, alignItems: 'center', marginTop: 5, marginRight: 10 }}>
                                    <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 20 }}></Image>
                                    <Text style={{ fontWeight: '700', marginTop: 5 }}> {item.title}</Text>
                                </View>
                            )
                        }}>
                    </FlatList>
                </View>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginLeft: 10, alignItems: 'center' }}>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: '700' }}>Trending</Text>
                        <Text style={{ color: 'orange', fontSize: 15, fontWeight: '500' }}>View all</Text>
                    </View>
                    <FlatList horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={Trending}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginLeft: 10, alignItems: 'center', marginTop: 5, marginRight: 10 }}>
                                    <Image source={{ uri: item.image }} style={{ width: 130, height: 230, borderRadius: 20 }}></Image>
                                    <Text style={{ fontWeight: '700', marginTop: 5 }}> {item.title}</Text>
                                </View>
                            )
                        }}>
                    </FlatList>
                </View>
                <View>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: '700' }}>About me</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: 'https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/restaurant_photo/001/568/898/wph-windsorsuite-restaurant-6-orig-wide.jpg' }}
                            style={{ width: Dimensions.get('screen').width - 20, height: 170, marginTop: 7, borderRadius: 10 }}></Image>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View >
                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 10 }}>Delicious Restaurant</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginLeft: 10 }}>98 Đường Mỹ Đình Nam Từ Liêm Hà Nội</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginRight: 10 }}>Hotline: 0376105680</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginRight: 10 }}>Mr.Quyet</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(242, 242, 242, 1)'
    },
    navigation: {
        flex: 3,
        marginTop: 32,
        backgroundColor: 'orange'
    },
    body: {
        flex: 9,
        marginTop: 10
    },
    footer: {
        flex: 1,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addressContainer: {
        width: Dimensions.get('screen').width - 100,
        borderBottomColor: "orange",
        borderBottomWidth: 0.5,
        alignItems: 'center',
        padding: 5,
        marginBottom: 10
    },
    addressTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#707070"
    },
    addressText: {
        fontSize: 20,
        fontWeight: '200',
        color: '#4F4F4F'
    }
})