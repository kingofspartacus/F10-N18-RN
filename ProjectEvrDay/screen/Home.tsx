import React, { useState } from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../StyleSheet/HomeTS'

const DATA = [
    {
        id: 1,
        img: 'https://www.isic.nl/media/1094811/0716_isic_nlbanner_nl.jpg?width=848&height=477&mode=crop&scale=both'
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/originals/88/c7/62/88c762532584f3bb1a0b199436128526.jpg'
    },
    {
        id: 3,
        img: 'https://i.pinimg.com/originals/36/f4/ca/36f4ca067565b67442c89ec7e514bdad.jpg'
    },
    {
        id: 4,
        img: 'https://1.bp.blogspot.com/-vFKIjKrdTg8/Xwg7iC5tD4I/AAAAAAAAR1k/YYvEqQ8fJmYwwsA6e3hZTHrTcSKOc7L8ACLcBGAsYHQ/s1600/forever%2B21%2Bshopee%2Bbanner.jpg'
    }
];
const DATA1 = [
    {
        id: 1,
        img: 'https://www.elle.vn/wp-content/uploads/2013/05/31/forever-21.jpg'
    },
    {
        id: 2,
        img: 'https://cf.shopee.vn/file/6cb78c53c23f534e4e06c3da3cc5e865'
    },
    {
        id: 3,
        img: 'https://pbs.twimg.com/media/B0vTD1DCYAAbKIH.jpg'
    },
    {
        id: 4,
        img: 'http://i.imgur.com/AEseFEy.jpg'
    }
];
const Home = () => {
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
            />
            <TouchableOpacity style={styles.VM}>
                <Text  style={styles.TxtVM}>VIEW MORE</Text>
            </TouchableOpacity>
        </View>
    )
    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity >
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
                keyExtractor={(item, index) => index.toString()}
                style={styles.fList}
                ListHeaderComponent={RenderHeader}
                ListFooterComponent={RenderFooter}
            />
        </View>
    )
}

export default Home

