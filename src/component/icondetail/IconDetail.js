import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function IconDetail({ nameIcon, colorIcon, titleIcon, review }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10, marginTop: 8 }}>
      <Icon name={nameIcon} size={18} color={colorIcon} />
      <Text style={{ fontWeight: '600', fontSize: 16, marginLeft: 10 }}>{titleIcon}</Text>
      {review && <Text style={{ fontWeight: '500', fontSize: 12, marginLeft: 5 }}>({review})</Text>}
    </View>
  );
}
