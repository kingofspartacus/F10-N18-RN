import React from 'react'
import { View, Text } from 'react-native'

export default function homeFlFooter() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[{ fontSize: 30, marginBottom: 8, fontWeight: 'bold' }]}>Shop the 'Gram</Text>
      <Text style={[{ fontSize: 15 }]}>Upload your favorite SB outfit on Instagram with</Text>
      <Text style={[{ fontSize: 15 }]}>#Forever21Men for a chance to be featured!</Text>
      <Text style={[{ fontSize: 20 }]}>@SADBOYsMen</Text>
    </View>
  )
}
