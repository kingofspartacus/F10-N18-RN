import { StyleSheet } from "react-native";
const styles = StyleSheet.create(
    {
        header:{
            height:50,
            width:'100%',
            justifyContent:'center',
            borderBottomWidth:0.2,
            borderBottomColor:'grey',
        },
        txttitle:{
            fontWeight:'bold',
            marginLeft:10,
            fontSize:25,
        },
        count:{
            height:50,
            width:'100%',
            justifyContent:'center',
            borderBottomWidth:0.2,
            borderBottomColor:'grey',
            alignItems:'center',
            backgroundColor:'#fafafa',
        },
        txtcount:{
            color:'#969696',
            fontWeight:'bold'
        },
        flat:{
            flexDirection:'row',
            height:200,
            width:'100%',
           
           
            borderBottomWidth:1,

        },
        img:{
            height:180,
            width:120,

        },
        description:{
            height:180,
            width:'64%'     
        },
        information:{
            flexDirection:'row',
            height:'35%',  
           
            justifyContent:'space-between',
            margin:10

        },
        txtprice:{
            fontSize:18,
            fontWeight:'bold',
        },
        txtname:{
            fontSize:15,
            color:'silver',
        },
        option:{
            flexDirection:'row',
            height:100
        },
        color:{
        
            height: 100,
            marginLeft:10,
            
        },
        op1:{
            flexDirection:'row',
            height:50,
            justifyContent:'space-between',
            alignItems:'center',
            marginLeft:6,
            width:100,
            borderRightWidth:0.5,
            
        },
        op2:{
            flexDirection:'row',
            height:'50%',
            justifyContent:'space-between',
            marginLeft:6,
            width:100,
            alignItems:'center',
            
        },
        op3:{
            flexDirection:'row',
            height:'50%',
            justifyContent:'space-between',
            marginLeft:10,
            width:100,
            alignItems:'center',
            
        },
        txtop:{
            fontWeight:'bold',
            fontSize:15,
        }
    })

export default styles