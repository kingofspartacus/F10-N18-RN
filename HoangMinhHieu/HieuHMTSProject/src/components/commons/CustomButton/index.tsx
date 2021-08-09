import React, {FC} from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from "./styles";
import color from "../../../assets/theme/colors";

interface CustomButtonProps{
    title: string;
    disable?: boolean;
    loading?: boolean;
    onPress: any;
    primary: any;
    secondary?: any;
    danger?: any;
}

const CustomButton: FC<CustomButtonProps> = ({title, disable, loading, onPress, primary, secondary, danger}) => {

    function getBgColor() {
        if(disable){
            return color.grey
        }

        if(primary){
            return color.primary
        }

        if(secondary){
            return color.secondary
        }

        if(danger){
            return color.danger
        }
    }

    return (
        <TouchableOpacity
            // disable = {disable}
            style={[styles.wrapper, {backgroundColor: getBgColor()} ]}
            onPress={onPress}
        >
            <View style={styles.loaderSection}>
                {loading && (<ActivityIndicator color={primary ? color.secondary : color.primary}/>)}
                {title && (
                    <Text style={{color: disable ? 'black' : color.white, paddingLeft: loading ? 5:0}}>{title}</Text>
                )}
            </View>

        </TouchableOpacity>
    );
}

export default CustomButton;