import {StyleSheet}  from "react-native";
import color from "../../../assets/theme/colors"

export default StyleSheet.create({
    inputContainer:{
        paddingVertical: 12,
    },
    wrapper:{
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginTop: 5,
    },
    textInput:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    error: {
        color: color.danger,
        paddingTop: 4,
        fontSize: 12
    }
});