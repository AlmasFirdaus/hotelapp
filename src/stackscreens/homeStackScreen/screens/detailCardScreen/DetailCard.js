import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { IconDetail } from '../../component';

export default function DetailCard({ route }) {
  const { width, height } = Dimensions.get('screen');
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ zIndex: 12, width: 36, height: 36, backgroundColor: '#F1F5FE', borderRadius: 18, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 20, left: 20 }}
      >
        <Icon name="chevron-back" size={24} color="rgba(0,0,0,0.6)" />
      </TouchableOpacity>
      <ScrollView>
        <View style={{ flex: 1, flexWrap: 'wrap' }}>
          <Image source={{ uri: route.params.data.photo.images.original.url }} style={{ width: width, height: width, resizeMode: 'cover' }} />
        </View>
        <View>
          <View style={{ flex: 1, borderTopLeftRadius: 28, borderTopRightRadius: 28, marginTop: -50, minHeight: 350 }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#fff', paddingTop: 45, paddingBottom: 50, paddingHorizontal: 16, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 28, letterSpacing: 1, marginBottom: 12 }}>{route.params.data.name}</Text>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <IconDetail nameIcon="star" colorIcon="#FFBD09" titleIcon={route.params.data.rating} review={route.params.data.num_reviews} />
                  <IconDetail nameIcon="pricetags" colorIcon="#0096D1" titleIcon={route.params.data.price} />
                  <IconDetail nameIcon="location" colorIcon="red" titleIcon={route.params.data.location_string} />
                </View>
              </View>

              <View style={{ marginTop: 30, marginBottom: 50 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Description</Text>
                <Text style={{ letterSpacing: 1, lineHeight: 22 }}>{route.params.data.ranking}</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate('BookingScreen')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF5A5A', padding: 12, borderRadius: 20 }}>
                  <Text style={{ fontWeight: '600', letterSpacing: 1.5, lineHeight: 28 }}>Booking</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#FF5A5A', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: -30, left: width / 2 - 30 }}>
              <Icon name="home" size={30} color="#fff" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
