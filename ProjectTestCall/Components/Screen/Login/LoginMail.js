import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function Login() {
  const [acc, onChangeAcc] = useState();
  const [pass, onChangePass] = useState();
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
      <TouchableOpacity>
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </View>

  )
}
