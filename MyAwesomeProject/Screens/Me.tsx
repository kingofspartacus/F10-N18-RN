import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Style/MeST'
const Me = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>MY ACCOUNT</Text>
                <TouchableOpacity style={styles.btnsetting}>
                    <Ionicons name="settings-sharp" size={23} color={"black"}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.hello}>
                    <Text style={styles.txthello}>Hello, Tuan</Text>
                </View>
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>MY ORDERS</Text>
                            <Text style={styles.txtmission}>Orders Status, History and Tracking</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>PROFILE</Text>
                            <Text style={styles.txtmission}>Manage name, email, password</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>PASSWORD</Text>
                            <Text style={styles.txtmission}>Manage password</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>MANAGE PREFERENCE</Text>
                            <Text style={styles.txtmission}>Marketing preference for emailand push notification</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>ADDRESS BOOK</Text>
                            <Text style={styles.txtmission}>Manage shipping and billing address</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>FOREVER 21 CREDIT CARD</Text>
                            <Text style={styles.txtmission}>Manage F21 Credit Card</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnoti}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>FOREVER 21 VISA CREDIT CARD</Text>
                            <Text style={styles.txtmission}>Manage F21 Visa Credit Card</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btnnoti}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>NOTIFICATIONS</Text>
                            <Text style={styles.txtmission}>View events and promotions</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.service}>
                            <Text>HELP & SUPPORT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service}>
                            <Text>SHIPPING INFO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service}>
                            <Text>FIND A STORE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service}>
                            <Text>GET THE FOREVER 21 CREDIT CARD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service}>
                            <Text>CAREERS AT FOREVER 21</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service}>
                            <Text>WRITE A REVIEW</Text>
                </TouchableOpacity>
                <View style={styles.signout}>
                    <TouchableOpacity style={styles.btnsignout}>
                        <Text style={styles.txtsignout}>SIGN OUT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default Me


