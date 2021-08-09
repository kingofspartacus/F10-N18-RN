import React, {useState, FC, PropsWithChildren} from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from "./styles";
import color from "../../../assets/theme/colors";

interface InputProps extends PropsWithChildren<any>{
    style?: any;
    onChangeText: any;
    value?: any;
    label: any;
    icon?: any;
    iconPosition: any;
    error?: any;
}

const Input: FC<InputProps> = ({style, onChangeText, value, label, icon, iconPosition, error, ...props}) => {

    const [focused, setFocused]= useState(false)

    function getFlexDirection() {
        if(icon && iconPosition){
            if(iconPosition === 'left'){
                return 'row'
            }else if(iconPosition === 'right'){
                return 'row-reverse'
            }
        }
    }

    function getBorderColor() {
        if(error){
            return color.danger
        }
        if(focused){
            return color.primary
        }else{
            return color.grey
        }
    }

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, {alignItems: icon ? 'center': 'baseline'},
                {borderColor: getBorderColor() ,flexDirection: getFlexDirection()}]}>
                <View>{icon && icon}</View>
                <TextInput 
                    style={[styles.textInput, style]}
                    placeholderTextColor = {color.grey}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => {
                        setFocused(true)
                    }}
                    onBlur={() => {
                       setFocused(false)
                    }}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

export default Input;
