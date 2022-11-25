import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Card() {
  const width = Dimensions.get('screen').width / 2 - 30;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailCard')}>
      <View style={{ backgroundColor: '#f5f5f5', marginTop: 12, width: width, borderRadius: 10, overflow: 'hidden' }}>
        <Image source={{ uri: 'https://source.unsplash.com/random/800x800/?hotel' }} style={{ width: width, height: 100, resizeMode: 'cover', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
        <View style={{ padding: 8 }}>
          <Text style={{ fontWeight: '600' }}>Nusa Penida Hotel</Text>
          <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Icon name="location" size={16} color="red" />
              <Text style={{ fontSize: 12, marginLeft: 6 }}>Bali, Indonesia</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
