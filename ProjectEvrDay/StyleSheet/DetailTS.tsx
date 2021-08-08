import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'grey'
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
    },
    iconTop:{
        marginHorizontal:10
    },
    Scroll:{
        
        height:'80%',
        
    },
    footer:{
        height:100,
        backgroundColor:'white',
        borderTopColor:'silver',
        borderTopWidth:0.5
    },
    DTImg:{
        width:'100%',
        height:600
    },
    tit:{
        height:70,
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        marginBottom:10
    },
    price:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:10,
    },
    name:{
        color:'grey',
        fontSize:15,
        marginLeft:10,
    },
})
export default styles