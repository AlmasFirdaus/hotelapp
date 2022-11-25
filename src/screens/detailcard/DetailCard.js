import React from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailCard() {
  const { width, height } = Dimensions.get('screen');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, flexWrap: 'wrap' }}>
          <Image source={{ uri: 'https://source.unsplash.com/random/800x800/?hotel' }} style={{ width: width, height: width, resizeMode: 'cover' }} />
        </View>
        <View>
          <View style={{ flex: 1, borderTopLeftRadius: 28, borderTopRightRadius: 28, marginTop: -50, minHeight: height }}>
            <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 18, paddingHorizontal: 16, borderTopLeftRadius: 28, borderTopRightRadius: 28 }}></View>
            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: -30, left: width/2-30 }}>
              <Icon name="home" size={30} color="#fff" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
