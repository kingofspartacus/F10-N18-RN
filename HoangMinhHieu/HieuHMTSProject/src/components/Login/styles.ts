import {StyleSheet}  from "react-native";
import color from "../../assets/theme/colors";

export default StyleSheet.create({
    logoImage:{
        width: 300,
        height: 150,
        alignSelf: 'center',
        marginTop: 50,
    },
    title:{
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },
    subtitle:{
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
    },
    form:{
        paddingTop: 20
    },
    createSection: {
        flexDirection: 'row'
    },
    linkText: {
        paddingLeft: 7,
        color: color.primary,
        fontSize: 16
    },
    infoText: {
        fontSize: 17
    }

});
