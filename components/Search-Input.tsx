import React from "react";
import { TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
import { useState } from "react";
import { Icon } from "react-native-vector-icons/Icon";

const Search: React.FC = () => {
    const [search, setSearch] = useState("");
    return (
        <View style={styles.container}>
            <Image source={require('../images/search.png')} style={styles.icon}></Image>
            <TextInput placeholder='Search here'
                value={search}
                onChangeText={setSearch}
                style={styles.search}
                placeholderTextColor='#666'>
            </TextInput>

        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width - 55,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    search: {
        justifyContent: 'center',
        paddingLeft: 10,
        fontSize: 20
    },
    icon: {
        width: 20,
        height: 20,
    }
})