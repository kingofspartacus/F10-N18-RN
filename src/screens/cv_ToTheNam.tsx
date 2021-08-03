import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export const cv_ToTheNam = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '95%', height: '30%', flexDirection: 'row', alignSelf: 'center' }}>
        <Image
          source={require('../assets/images/40fbbfb01db5eaebb3a4.jpg')}
          style={{ width: '38%', height: '85%', margin: 10 }}
        />
        <View style={{}}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 5 }}>Tô Thế Nam</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Lập trình viên react native</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Ngày sinh: </Text>
            <Text style={{ fontSize: 15, marginLeft: 3 }}>12/04/2000</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Giới tính: </Text>
            <Text style={{ fontSize: 15, marginLeft: 3 }}>Nam</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Điện thoại: </Text>
            <Text style={{ fontSize: 15, marginLeft: 3 }}>0947410918</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Email: </Text>
            <Text style={{ fontSize: 15, marginLeft: 3 }}>namtt@vmodev.com</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Quê quán: </Text>
            <Text style={{ fontSize: 15, marginLeft: 3 }}> Vĩnh Bảo, Hải Phòng</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Chỗ ở hiện tại: </Text>
            <Text style={{ fontSize: 15, marginLeft: 3 }}> Ngọc Khánh, Ba Đình, Hà Nội</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

});