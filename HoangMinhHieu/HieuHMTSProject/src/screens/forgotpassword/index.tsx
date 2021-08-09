import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

const Forgot_Password = () => {

    return (
        <View style={styles.container}>
            <Text style = {styles.brand}>Forgot Password</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    brand: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 47,
    },
});

export default Forgot_Password;
