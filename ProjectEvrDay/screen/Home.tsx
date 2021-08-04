import React, { useState } from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../StyleSheet/HomeTS'
import DATA1 from '../FakeData/HomeDT2'
import DATA from '../FakeData/DATA'
import {useNavigation} from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const renderBotom = ({ item }: { item: any }) => (
        <TouchableOpacity>
            <Image
                source={{ uri: item.img }}
                style={styles.ImgB}
            />
        </TouchableOpacity>
    )
    const RenderHeader = () => (
        <TouchableOpacity style={styles.Offers}>
            <Text style={styles.txtOffers}>All Special Offers</Text>
        </TouchableOpacity>
    )
    const RenderFooter = () => (
        <View>
            <Text style={styles.txt1}>Shop the 'Gram</Text>
            <Text style={styles.txt2}>Upload your favorite F21 outfit on Instagram with #Forever21Men for a chance to be featured!</Text>
            <FlatList
                data={DATA1}
                renderItem={renderBotom}
                keyExtractor={(item, index) => index.toString()}
                style={styles.fList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.VM}>
                <Text  style={styles.TxtVM}>VIEW MORE</Text>
            </TouchableOpacity>
        </View>
    )
    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ListPrd',item)} >
            <Image
                source={{ uri: item.img }}
                style={styles.Img}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name={'menu-outline'} color={'black'} size={30} />
                </TouchableOpacity>
                <Text style={styles.Title}>FOREVER 21</Text>
                <View style={styles.blank} />
            </View>
            <View style={styles.searchbar}>
                <Ionicons name={'search'} color={'black'} size={25} />
                <TextInput
                    style={styles.searchIp}
                    placeholder="Search"
                    placeholderTextColor={'black'}
                    value={search}
                    onChangeText={text => setSearch(text)}
                />
                <TouchableOpacity>
                    <Ionicons name={'mic'} color={'black'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name={'barcode-outline'} color={'black'} size={25} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.categoryID?.toString()}
                style={styles.fList}
                ListHeaderComponent={RenderHeader}
                ListFooterComponent={RenderFooter}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

