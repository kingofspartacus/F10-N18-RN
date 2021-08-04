import React, {useContext, useState, useEffect} from 'react';
import LoginComponent from "../../components/Login";
import {useNavigation, useRoute} from "@react-navigation/native";


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

    const onSubmit = () => {
        if(form.phone_number && form.password){
            console.log('login')
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