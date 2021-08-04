import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../Style/WishlistST'
import Data from '../Data/DataWishlist'
const Wishlist = () => {
    const renderItem1= ({item}:{item:any})=>(
      <View style={styles.flat}>
          <TouchableOpacity  style={{margin:10}} >
                  <Image source={{ uri: item.photo }} style={styles.img}/>
          </TouchableOpacity>
          <View style={styles.description}>
            <View style={styles.information}>
              <View>
                <Text style={styles.txtprice}>{item.price}</Text>
                <Text style={styles.txtname}>{item.name}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name='ellipsis-vertical' size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.option}>
              <View style={styles.color}>
                <TouchableOpacity style={styles.op1}>
                    <Text style={styles.txtop}>{item.color}</Text>
                    <Ionicons name='chevron-down-outline' size={17} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.op2}>
                  <Text style={styles.txtop}>{item.qty}</Text>
                  <Ionicons name='chevron-down-outline' size={17} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.op3}>
                <Text style={styles.txtop}>{item.size}</Text>
                <Ionicons name='chevron-down-outline' size={17} />
              </TouchableOpacity>
            </View>
          </View>  
          
      </View>
    )

    
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.txttitle}>Wishlist</Text>
            </View>
            <View style={styles.count}>
                <Text style={styles.txtcount}>2 Item(s)</Text>
            </View>
            <FlatList 
                 data={Data}
                 renderItem={renderItem1}
                 keyExtractor={(item,index)=> index.toString()}
                />
        </View>
        
    )
}

export default Wishlist


