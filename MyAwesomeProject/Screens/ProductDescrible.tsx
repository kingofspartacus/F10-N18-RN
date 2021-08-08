import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../Style/ProductDescribleST'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const ProductDescrible = ({ route }: { route: any }) => {
    
    const navigation = useNavigation();
    const { ProductDescrible } = route.params;
       return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back-outline' size={35} style={styles.back}/>
                </TouchableOpacity>
                <Text style={styles.title}>FOREVER 21</Text>
                <TouchableOpacity >
                    <Feather name="share" size={25} color= {'#000'} style={styles.share}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <Image
                source={{ uri: ProductDescrible.url}}
                style={styles.img}
            />
            <View style={styles.description}>
                <View style={styles.note}>
                    <Text style={styles.txtprice}>₫600000</Text>
                    <Text style={styles.txtname}>T-shirt</Text>
                </View>
                <View style={styles.star}>
                    <View style={styles.rate}>
                        <Entypo name='star' size={20} style={styles.iconstar} />
                        <Entypo name='star' size={20} style={styles.iconstar} />
                        <Entypo name='star' size={20} style={styles.iconstar} />
                        <Entypo name='star' size={20} style={styles.iconstar} />
                        <Entypo name='star' size={20} style={styles.iconstar} />
                    </View>
                        <Text style={styles.count}>(5)</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btnPI}>
                    <Text style={styles.txtPI}>Production Information</Text>
                    <Text style={styles.txtplus}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPI}>
                    <Text style={styles.txtPI}>Size Guide</Text>
                    <Text style={styles.txtplus}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPI}>
                    <View style={styles.review}>
                        <Text>Review(5)</Text>
                      
                        <View style={styles.starlight}>
                            <Entypo name='star' size={20} style={styles.iconreview} />
                            <Entypo name='star' size={20} style={styles.iconreview} />
                            <Entypo name='star' size={20} style={styles.iconreview} />
                            <Entypo name='star' size={20} style={styles.iconreview} />
                            <Entypo name='star' size={20} style={styles.iconreview} />
                        </View>
            </View>
          
                    <Text style={styles.txtplus}>+</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.material}>
                    <TouchableOpacity style={styles.btncolor}>

                    </TouchableOpacity>
                    <Text>KHAKI/MULTI</Text>
                </View>
                <View style={styles.addcart}>
                    <TouchableOpacity style={styles.btnaddcart}>
                        <Text style={styles.txtaddcart}>ADD TO CART</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnheart}>
                <Ionicons name="heart-outline" size={35} />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default ProductDescrible


