import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../Style/CartST'
import Data from '../data/DataWishlist'
// const [count,setcount] =useState(0)

const Cart = () => {
    let result :number
    result= Data.reduce((acc,total)=> acc + total.price,0)
    
    const renderItem1= ({item}:{item:any})=>(
        <View style={styles.flat}>
            <TouchableOpacity  style={{margin:10}} >
                    <Image source={{ uri: item.photo }} style={styles.img}/>
            </TouchableOpacity>
            <View style={styles.description}>
              <View style={styles.information}>
                <View>
                  <Text style={styles.txtprice}>₫{item.price}</Text>
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
      const Footer =()=>{
        return(
            <View>
                <View style={styles.summary}>
                    <View style={styles.ordersummary}>
                        <Text style={styles.txtordersummary}>Order Summary</Text>
                    </View>
                    <View style={styles.bill}>
                        <View >
                            <Text style={styles.txtsubtotal}>Subtotal</Text>
                            <Text style={styles.txtsubtotal}>Discount</Text>
                            <Text style={styles.total}>Total</Text>
                        </View>
                        <View>
                            <Text style={styles.txtsubtotal}>₫502335</Text>
                        <Text style={styles.txtsubtotal}>-₫502335</Text>
                            <Text style={styles.total}>₫502335</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.promotioncode}>
                        <Text style={styles.txtpromotioncode}>PROMOTIONCODE</Text>
                        <Ionicons name='chevron-forward' size={27} />
                    </TouchableOpacity>
                </View>
                <View style={styles.save}>
                    <View style={styles.titsave}>
                        <Text style={styles.txttitsave}>SAVE FOR LATER(0)</Text>
                    </View>
                    <FlatList 
                    data={Data}
                    renderItem={renderItem1}
                    keyExtractor={(item,index)=> index.toString()}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    />
                </View>
            </View>
            
        )
    }
    return (
        <View  style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back-outline' size={35}/>
                <Text style={styles.txttitle}>Cart</Text>
            </View>
            <View style={styles.count}>
                <Text style={styles.txtcount}>3 Item(s): Total (excluding delivery):</Text>
                <Text style={styles.txttotal}>₫{result}</Text>
            </View>
            <FlatList 
                    data={Data}
                    renderItem={renderItem1}
                    keyExtractor={(item,index)=> index.toString()}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    ListFooterComponent={Footer}
                    />
            <View style={styles.checkout}>
                        <TouchableOpacity style={styles.btncheckout}>
                            <Text style={{fontWeight:'bold'}}>CHECKOUT</Text>
                        </TouchableOpacity>
            </View> 
        </View>
    )
}
export default Cart

