import React,{useState} from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../StyleSheet/ListPrdTS'
import DATA from '../FakeData/DATA'
import {useNavigation} from '@react-navigation/native';

const ListPrd = ({ route }: { route: any }) => {
    const { ListPrd } = route.params;
    const DetailDT = ListPrd.dataList
    let detail :any = []
    for(let i=0;i < DATA.length;i++)
    {
        detail= detail.concat(DATA[i].dataList)
    }
    const navigation = useNavigation();
    const renderBotom = ({ item }: { item: any }) => (
        <TouchableOpacity>
            <Image
                source={{ uri: item.img }}
                style={styles.ImgDT}
            />
            <Text>{item.price} $</Text>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
    return (
        <View style={{ height: "100%" }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name={'arrow-back-outline'} size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>{ListPrd.categoryName}</Text>
            </View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.ButtonHead}>
                    <Text style={styles.txtBH}>SORT</Text>
                    <Ionicons name={'chevron-down'} size={18} />
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.ButtonHead}>
                    <Text style={styles.txtBH}>REFINE</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={DetailDT}
                renderItem={renderBotom}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={styles.fList}
            />
        </View>
    )
}

export default ListPrd
