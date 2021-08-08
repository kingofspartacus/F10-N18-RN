import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../Style/ProductST'
import Data from '../data/Dataproduct'
import { useNavigation } from '@react-navigation/native';

const Product = ({route}:{route:any}) => {
    
  const navigation = useNavigation();
    let {Product} = route.params;
    let DataProduct= Product.dataMenu;
  
    const onClick = (data:any)=>()=>{
        navigation.navigate('ProductDescrible',{ProductDescrible:data})
    }
    // let newData :any[] = []
    // for(let i=0; i <Data.length;i++)
    // {
    //     newData = newData.concat(Data[i].dataMenu)
    // }
    let count :any[] = []
    for(let i=0;i<DataProduct.length;i++)
    {
        count= DataProduct.map((e:{id:any[]})=>e.id)[i]
    }
    
    const Header = ()=>{
        return(
            <View style={styles.style}>
                <Text>{count} styles</Text>
            </View>
        )
    }
    const renderItem = ({item}:{item:any}) => (
        <View>
            <TouchableOpacity onPress={onClick(item)} >
                <Image source={{ uri: item.url}}  style={styles.imgF}  resizeMode="cover" />
                <View style={styles.info}>
                    <Text style={styles.txtprice}>₫{item.price}</Text>
                    <TouchableOpacity>
                        <Ionicons name='heart-outline' size={28} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.txtname}>{item.title}</Text>
            </TouchableOpacity>
        </View>
       
    )
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Ionicons name='arrow-back-outline' size={35}/>
                </TouchableOpacity>
                <Text style={styles.txttitle}>{Product.title}</Text>
            </View >
            <View style={styles.option}>
                <TouchableOpacity style={styles.sort}>
                    <Text style={styles.txtsort}>SORT</Text>
                    <Ionicons name='chevron-down-outline' size={20} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity>
                    <Text style={styles.txtsort}>REFIND</Text>   
                </TouchableOpacity>
            </View>
            <FlatList 
            data={DataProduct}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            ListHeaderComponent={Header}
            />

        </View>

    )
}

export default Product


