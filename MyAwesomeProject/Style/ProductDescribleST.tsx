import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    header:{
        height:50,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row', 
        borderBottomWidth: 0.5,
        borderBottomColor: '#e0e0e0'
    },
    back:{
        marginRight:20,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    share:{
        marginLeft:10
    },
    img:{
        width:"100%",
        height:400,
        margin:5,
    },
    description:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:90,
        backgroundColor:'white',
        borderBottomWidth: 10,
        borderBottomColor: '#e0e0e0',
        width:'100%'
    },
    note:{
        marginTop:10,
        marginLeft:20
    },
    txtprice:{
        fontWeight:'bold',
        fontSize:18,
    },
    txtname:{
        marginTop:5,
        fontSize:16,
        color:'#e0e0e0',
    },
    star:{
        flexDirection:'row',
        marginTop:2,
        marginRight:20,
    },
    rate:{
        flexDirection:'row',
        marginTop:2,
        
    },
    iconstar:{
        marginTop:10,
        color:'yellow',
    },
    count:{
        marginTop:12,
    },
    btnPI:{
        justifyContent:'space-between',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e0e0e0',
    },
    txtPI:{
        marginLeft:10,
    },
    txtplus:{
        marginRight:10,
    },
    review:{
        flexDirection:'row',
        marginLeft:10,
    },
    iconreview:{
        color:"yellow",
       },
    starlight:
    {
        flexDirection:'row',
    },
    footer:{
        flexDirection:'row',
        height:100,
        width:'100%',
        borderColor:'#e0e0e0',
        borderTopWidth:1
    },
    material:{
        height:100,
        justifyContent:'center',
        marginLeft:5
    },
    btncolor:{
        backgroundColor: 'blue', 
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth:3,
        marginLeft: 20,
    },
    addcart:{
        height:100,
        alignItems:'center',
        width:'65%',
        justifyContent:'center',
    },
    btnaddcart:{
        width:'90%',
        height:55,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    txtaddcart:{
        color:'white',
        fontWeight:'bold',
    },
    btnheart:{
        justifyContent:'center',
        alignItems:'center',

    }
    

})
export default styles