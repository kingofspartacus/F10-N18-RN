import React, {FC, useState} from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from "../../components/commons/Container";
import Input from "../../components/commons/Input";
import CustomButton from "../../components/commons/CustomButton";
import styles from "./styles"
import {LOGIN} from "../../constants/routeNames";

interface RegisterComponentProps{
    onChange: any;
    onSubmit: any;
    errors: any;
}

const RegisterComponent: FC<RegisterComponentProps> = ({onChange, onSubmit, errors}) => {

    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <Container>
            <Image 
                style={styles.logoImage} 
                source={{uri: 'https://news.vmogroup.com/wp-content/uploads/2021/07/image.png'}}
                resizeMode={"contain"}
            />
            <View style={styles.form}>
                <Text style={styles.title}>Welcome to F10-N18-RN</Text>
                <Text style={styles.subtitle}>Create a free account</Text>
                
                <Input
                    keyboardType='phone-pad'
                    label='Phone Number'
                    iconPosition='right'
                    placeholder={'Nhập số điện thoại'}
                    onChangeText={(value: string) => {
                        onChange({name: 'phone_number', value})
                    }}
                    error={errors.phone_number}
                />
                <Input
                    label='Password'
                    icon={
                        <TouchableOpacity onPress={() => {setIsSecureEntry(prev => !prev)}}>
                           <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                        </TouchableOpacity>
                    }
                    iconPosition='right'
                    placeholder={'Nhập mật khẩu'}
                    secureTextEntry={isSecureEntry}
                    onChangeText={(value: string) => {
                        onChange({name: 'password', value})
                    }}
                    error={errors.password}
                />
                <CustomButton onPress={onSubmit} primary title={'Sign Up'}/>
            </View>
            <View style={styles.createSection}>
                <Text style={styles.infoText}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigate(LOGIN)}>
                    <Text style={styles.linkText}>Login</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}

export default RegisterComponent;
