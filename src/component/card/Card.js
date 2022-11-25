import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Card({ item }) {
  const width = Dimensions.get('screen').width / 2 - 30;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailCard', { data: item })}>
      <View style={{ backgroundColor: '#f5f5f5', flex: 1, marginTop: 12, width: width, borderRadius: 10, overflow: 'hidden' }}>
        <Image source={{ uri: item.photo?.images?.original?.url }} style={{ width: width, height: 100, resizeMode: 'cover', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
        <View style={{ padding: 8, justifyContent: 'space-between', flex: 1 }}>
          <Text style={{ fontWeight: '600', flex: 1 }}>{item.name}</Text>
          <View style={{ paddingTop: 10, flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Icon name="location" size={16} color="red" />
              <Text style={{ fontSize: 12, marginLeft: 6 }}>{item.location_string}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
