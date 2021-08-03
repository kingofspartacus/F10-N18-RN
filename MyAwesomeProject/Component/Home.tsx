import React from 'react';
import { Text, Image, FlatList, View, TouchableOpacity, TextInput ,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
//  import styles from '../Style/HomeST'
const Banner = [
    {
      id: 1,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5ePfd3SvB-6lPuDpxpDQSOgmaP819SnE_A&usqp=CAU'
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TXtnq1HQaa-H6Wj4-VAm9CY-FYWV9gnK4Q&usqp=CAU'
    },
    {
      id: 3,
      url: 'https://celiavn.com/upload/files/banner-thoi-trang-nu.jpg'
    },
    {
      id: 4,
      url: 'https://thoitrangcongsodep.net/wp-content/uploads/2020/01/t5wU7y.png'
    },
    {
      id: 5,
      url: 'https://adaman.vn/ximages/1920x700x80/c4902852762e476984f3447312a74dd1.webp'
    },
  ]
  const DATA = [
    {
      id: 1,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxkhpLKZfbnhHy_3ebYQtabf1GKLndhMNdQ&usqp=CAU'
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6uQ9vC8q8ML2CBbHho11My8tOk921Ep-4Q&usqp=CAU'
    },
    {
      id: 3,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7CcFgsY-KteCERBrfuGeJBUR_pjfrQ2dvA&usqp=CAU'
    },
    {
      id: 4,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCShQIkkFjMD4C53n8xfI1HzUgcwwufl9Hw&usqp=CAU'
    },
  ]
const Home :Function= () => {
    const Header =()=>{
       return (
        <TouchableOpacity>
        <View style={{width:'100%',height:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#969696',textDecorationLine:'underline'}}>All Special Offers(12)</Text>
             </View>
        </TouchableOpacity>
       )
    }
    const Footer =()=>{
        return(
    <View >
        <View style={{width:'100%',height:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>Shop the 'Gram</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontSize:15}}>Upload your favorite F21 outfit on Instagram with</Text>
                        <Text>#F21xME for a chane to be featuread!</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',height:40,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons name="logo-instagram" size={25}  />
                        <Text style={{fontSize:20,fontWeight:'bold'}}> @ F21XME</Text>
                </View>
        <View style={{ flexDirection:'row',width:'100%',flexWrap:'wrap-reverse',justifyContent:'center',alignItems:'center' }}>
          {
            DATA.map((e: { id: React.Key | null | undefined; url: any; }, i: any) => {
              return (
                <View key={e.id} style={{ margin: 10 }}>
                  <Image source={{ uri: e.url }} style={{width:175,height:175}}  />
                </View>
              )
            })
          }
        </View>
        <TouchableOpacity style={{width:90,height:40,backgroundColor:'#eaeaea',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}>VIEW MORE</Text>
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
                      <Image source={{ uri: item.url }} style={{ width: '100%', height: 230 }} resizeMode="cover" />
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
const styles = StyleSheet.create(
    {
        screen:{
            height:'100%',
            
        },
        title:{
            height:50,
            flexDirection:'row',
            justifyContent:'space-between' ,
            alignItems:'center',
            borderBottomWidth:0.3,
            borderBottomColor:'silver',
            backgroundColor:'white'
        },
        tit:{
            fontSize:25,
            fontWeight:'bold',
        },
        line:{
            width:30,
            height:30,
        },
        searchbar:{
            height:50,
            backgroundColor:'#f5f5f5',
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center',
            
        },
        IPsearch:{
            width:220,
            height:50,
        }
        
    })

