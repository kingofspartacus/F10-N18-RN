import React from 'react';
import { Text, Image, FlatList, View, TouchableOpacity, TextInput ,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../Style/HomeST'
import DATA from '../Data/Datamau'
import Banner from '../Data/Databanner'
import Product from '../Data/Dataproduct'
const Home = () => {
//  const a = Product[0].dataMenu.concat(Product[1].dataMenu.concat(Product[2].dataMenu))
    let b :any[] = []
    for(let i=0;i < Product.length;i++)
    {
       b= b.concat(Product[i].dataMenu)
        // b= Product.map(e => e.dataMenu[i])
    }
    let count : number
    for(let i=0;i < Product.length; i++)
    {
        count = Product.map(e=>e.categoryId)[i]
    }
    
    const Header =()=>{
       return (
        <View style={styles.offer}>
        <TouchableOpacity style={styles.btnoffer}>
                <Text style={styles.txtoffer}>All Special Offers({count})</Text>
        </TouchableOpacity>
        </View>
       )
    }
    const Footer =()=>{
        return(
    <View >
        <View >
            <View style={styles.recently}>
                <Text style={styles.txtrecently}>RECENTLY VIEWED</Text>
                <TouchableOpacity style={styles.btnclear}>
                    <Text style={styles.txtrecently}>CLEAR</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                    horizontal
                    data={b}
                    renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity style={{ marginLeft:10 }}  >
                                <Image source={{ uri: item.url}} style={styles.imgF}  resizeMode="cover" />
                                <View style={styles.information}>
                                    <Text style={styles.txttitle}>{item.title}</Text>
                                    <Text style={styles.txtprice}>₫{item.price}</Text>
                                </View>
                                
                            </TouchableOpacity>
                            
                        </View>
                    )
                    }}/>
        </View>
        
        <View style={styles.brand}>
            <Text style={styles.txtbrand}>Shop the 'Gram</Text>
            <Text style={styles.txtdescriptsion}>Upload your favorite F21 outfit on Instagram with</Text>
            <Text style={styles.txtdescriptsion}>#F21xME for a chane to be featuread!</Text>
            <View style={styles.name}>
                <Ionicons name="logo-instagram" size={25}  /> 
                <Text style={styles.txtname}> @ F21XME</Text>
            </View>
        </View>
       
        <View style={styles.selection}>
            {
                DATA.map((e: {id: React.Key | null |undefined ;url:any}, i:any) => {
                    return (
                        <TouchableOpacity key={e.id} style={{margin:10}} >
                                <Image source={{ uri: e.url }} style={styles.imgS}/>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
        
        <TouchableOpacity style={styles.more}>
                         <Text style={styles.txtmore}>VIEW MORE</Text>
        </TouchableOpacity>
    </View>
        )

    }
    return (
        <View style={styles.screen}>
                <View style={styles.title}>
                    <TouchableOpacity>
                        <Ionicons name="menu-outline" size={40} />
                    </TouchableOpacity>
                    <Text style={styles.tit}>Forever 21</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.searchbar}>
                    <Ionicons name='search' size={24}/>
                    <TextInput
                       style={styles.IPsearch}
                       placeholder='Search'/>
                    <TouchableOpacity>
                        <Ionicons name='mic' size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='barcode-outline' size={24}/>
                    </TouchableOpacity>
                </View>
                <FlatList 
                data={Banner}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }}  >
                      <Image source={{ uri: item.url }} style={styles.imgB} resizeMode="cover" />
                    </TouchableOpacity>
                  )
                }}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
                 />  
        </View>
    )
}
export default Home


