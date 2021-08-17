import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LoginMail from './Login/LoginMail'
import LoginPhone from './Login/LoginPhone'
import { useNavigation } from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  const [SC, setScreen] = useState('LoginMail');
  const ToggleScreen = () => {
    if (SC) {
      if (SC == 'LoginMail') {
        return <LoginMail />;
      }
      if (SC == 'LoginPhone') {
        return <LoginPhone />;
      }
    }
  };
  return (
    <View>
      <ToggleScreen />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => setScreen('LoginMail')}>
          <Text>Đăng nhập bằng Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('LoginPhone')}>
          <Text>Đăng nhập bằng SDT</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}
