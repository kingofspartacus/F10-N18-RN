import React, {useState, useEffect, useContext} from 'react';
import RegisterComponent from "../../components/Register";

interface data{
    name: any;
    value: any;
}

export interface formResgister{
    phone_number?: string;
    password?: string;
}

const Register = () => {

    const [form, setForm] = useState<formResgister>({})
    const [errors, setErrors] = useState({})

    const onChange = (data: data) => {
        setForm({...form, [data.name]: data.value})

        if(data.value !== ''){
            if(data.name === 'password'){
                if(data.value.length < 8){
                    setErrors((prev) => {
                        return {...prev, [data.name]: 'Mật khẩu phải có ít nhất 8 ký tự!'}
                    })
                } else {
                    setErrors((prev) => {
                        return {...prev, [data.name]: null}
                    })
                }
            }else{
                setErrors((prev) => {
                    return {...prev, [data.name]: null}
                })
            }
        }else{
            setErrors((prev) => {
                return {...prev, [data.name]: 'Trường này là bắt buộc'}
            })
        }
    }

    const onSubmit = () => {

        if(!form.phone_number){
            setErrors((prev) => {
                return {...prev, phone_number: 'Số điện thoại không được để trống!'}
            })
        }

        if(!form.password){
            setErrors((prev) => {
                return {...prev, password: 'Mật khẩu không được để trống!'}
            })
        }

    }

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            errors={errors}
        />
    );
}

export default Register;
