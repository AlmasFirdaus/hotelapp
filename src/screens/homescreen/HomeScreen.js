import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { styles } from '../../assets/style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../../component/card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#F1F5FE', padding: 4, borderRadius: 50 }}>
            <Icon name="menu-outline" size={30} />
          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>Home</Text>
        </View>

        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput placeholder="Search" style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 6, backgroundColor: '#fefefe', elevation: 2 }} />
          <TouchableOpacity style={{ backgroundColor: '#515778', padding: 8, borderRadius: 50, marginLeft: 10 }}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 28, letterSpacing: 2 }}>Hotel</Text>
          <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Card />
          </View>
        </View>

        <View>
          <Text>Halo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
