import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';
import { useState } from "react";
import { useNavigation } from '../utils/index';


export const LandingScreen = () => {
    const { navigate } = useNavigation();
    const [location, setLocation] = useState<Location.LocationGeocodedAddress>();
    const [errorMsg, setErrorMsg] = useState("");
    const [displayAddress, setDisplayAddress] = useState("Waiting...");

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { coords } = location;

            if (coords) {
                const { latitude, longitude } = coords;
                let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude });
                for (let item of addressResponse) {
                    setLocation(item);
                    let curentAddress = `${item.name}, ${item.street}, ${item.subregion}, ${item.region}, ${item.country}`;
                    setDisplayAddress(curentAddress)
                    if (curentAddress.length > 0) {
                        setTimeout(() => {
                            navigate('homeStack')
                        }, 1000);
                    }
                    return
                }
            }
            // setLocation(location);
        })();
    }, []);

    let text: string = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    }
    else {
        if (location) {
            text = JSON.stringify(location)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
            </View>
            <View style={styles.body}>
                <Image source={require("../components/images/delivery-address.png")}
                    style={{ width: 80, height: 80 }}></Image>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Your Delivery Address</Text>
                </View>
                <Text style={styles.addressText}> {displayAddress}</Text>
            </View>
            <View style={styles.footer}>
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

    },
    body: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
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
        fontSize: 17,
        fontWeight: '200',
        color: '#4F4F4F'
    }
})