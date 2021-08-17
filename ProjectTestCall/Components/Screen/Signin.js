import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function RegisterMail() {
    const navigation = useNavigation();
    const [acc, onChangeAcc] = useState();
    const [pass, onChangePass] = useState();
    const register = (acc, pass) => {
        auth()
            .createUserWithEmailAndPassword(acc, pass)
            .then(() => {
                console.log('User account created & signed in!');
                Alert.alert(
                    "Thông báo",
                    "Đăng kí thành công",
                    [
                      {
                        text: "Cancel",
                      },
                      { text: "OK" }
                    ]
                  );
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    Alert.alert(
                        "Thông báo",
                        "Đã có email",
                        [
                          {
                            text: "Cancel",
                          },
                          { text: "OK" }
                        ]
                      );
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    Alert.alert(
                        "Thông báo",
                        "Có kí tự không phù hợp",
                        [
                          {
                            text: "Cancel",
                          },
                          { text: "OK" }
                        ]
                      );
                }
            });
    }
    return (
        <View>
            <Text>User name</Text>
            <TextInput
                onChangeText={onChangeAcc}
                value={acc}
                placeholder="User name"
            />
            <Text>Password</Text>
            <TextInput
                onChangeText={onChangePass}
                value={pass}
                placeholder="Password"
            />
            <TouchableOpacity onPress={() => register(acc, pass)}>
                <Text>Đăng ký</Text>
            </TouchableOpacity>
        </View>

    )
}
