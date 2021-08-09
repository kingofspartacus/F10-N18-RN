import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <TextInput placeholder='Search'></TextInput>
            </View>
            <View style={styles.body}>
                <Text>Body</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
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
        flex: 2,
        marginTop: 35
    },
    body: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    footer: {
        flex: 1,
        backgroundColor: 'blue'
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