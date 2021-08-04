import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'flex-start',
        height:50,
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'grey'
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
        marginLeft:10
    },
    ButtonHead:{
        flexDirection:'row',
        width:'50%',
        justifyContent:'center',

    },
    line:{
        width:1,
        height:13,
        backgroundColor:'silver'
    },
    txtBH:{
        marginRight:8,
        color:'grey',
        fontSize:16
    },
    ImgDT:{
        width:200,
        height:300,
    },
    fList:{
        backgroundColor:'white',
        height:'auto'
    },
})
export default styles