import React, {FC} from 'react';
import { View, ScrollView} from 'react-native';
import styles from "./styles";

interface ContainerProps{
    style?: any;
}

const Container: FC<ContainerProps> = ({style, children}) => {

    return (
        <ScrollView>
            <View style={[styles.wrapper, style]}>
                {children}
            </View>
        </ScrollView>
    );
}

export default Container;