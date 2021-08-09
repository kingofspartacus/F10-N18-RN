import React, {useState, FC} from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from "../../components/commons/Container";
import Input from "../../components/commons/Input";
import CustomButton from "../../components/commons/CustomButton";
import styles from "./styles"
import {REGISTER} from "../../constants/routeNames";
import { useGlobalContext } from '../../context/Provider';

interface LoginComponentsProps{
    onChange: any;
    onSubmit: any;
}

const LoginComponent: FC<LoginComponentsProps> = ({onChange, onSubmit}) => {

    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const {authState : {isLoggedIn}} = useGlobalContext()

    return (
        <Container>
            <Image 
                style={styles.logoImage} 
                source={{uri: 'https://news.vmogroup.com/wp-content/uploads/2021/07/image.png'}}
                resizeMode={"contain"}
            />
            <View style={styles.form}>
                <Text style={styles.title}>Welcome to F10-N18-RN</Text>
                <Text style={styles.subtitle}>Please login here</Text>
                <Input
                    keyboardType='phone-pad'
                    label='Phone Number'
                    iconPosition='right'
                    placeholder={'Nhập số điện thoại'}
                    onChangeText={(value: string) => {
                        onChange({name: 'phone_number', value})
                    }}
                />
                <Input
                    label='Password'
                    icon={<TouchableOpacity onPress={() => {setIsSecureEntry(prev => !prev)}}>
                        <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>}
                    placeholder={'Nhập mật khẩu'}
                    iconPosition='right'
                    secureTextEntry={isSecureEntry}
                    onChangeText={(value: string) => {
                        onChange({name: 'password', value})
                    }}
                />
                <CustomButton primary title={'Login'} onPress={() => {onSubmit()}}/>
            </View>
            <View style={styles.createSection}>
                <Text style={styles.infoText}>Need a new account?</Text>
                <TouchableOpacity
                    onPress={() => navigate(REGISTER)}>
                    <Text style={styles.linkText}>Register</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}

export default LoginComponent;
