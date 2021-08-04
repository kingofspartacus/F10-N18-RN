import React, {useContext, useState, useEffect} from 'react';
import LoginComponent from "../../components/Login";
import {useNavigation, useRoute} from "@react-navigation/native";
import { GlobalContext, useGlobalContext } from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';


interface data{
    name: any;
    value: any;
}

export interface formLogin{
    phone_number?: string;
    password?: string;
}

const Login = () => {

    const [form, setForm] = useState<formLogin>({})
    const {authDispatch} = useGlobalContext()

    const onSubmit = () => {
        if(form.phone_number && form.password){
            console.log('login')
            loginUser()(authDispatch)
        }
    }

    const onChange = (data: data) => {
        setForm({...form, [data.name]: data.value})
    }

    return (
        <LoginComponent 
            onSubmit={onSubmit}
            onChange={onChange}
        />
    );
}

export default Login;