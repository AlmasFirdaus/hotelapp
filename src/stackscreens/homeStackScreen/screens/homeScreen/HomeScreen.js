import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, NavigationTop } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getHotel, getLatLong } from '../../../../api/getApi';
import images from '../../../../assets/image';

export default function HomeScreen() {
  const [dataHotel, setDataHotel] = useState([]);
  const [isLoading, setIsloding] = useState(false);
  const [search, setSearch] = useState('');
  const height = (Dimensions.get('screen').height * 65) / 100;

  const handleSearch = () => {
    if (search !== '') {
      setIsloding(true);

      getLatLong(search).then((res) => {
        getHotel({ latitude: res.data[0].result_object.latitude, longitude: res.data[0].result_object.longitude }).then((resHotel) => {
          setDataHotel(resHotel);
          setTimeout(() => {
            setIsloding((prev) => !prev);
          }, 2000);
        });
      });
    }
  };

  useEffect(() => {
    setIsloding(true);
    if (dataHotel.length === 0) {
      getLatLong(search).then((res) => {
        getHotel({ latitude: res.data[0].result_object.latitude, longitude: res.data[0].result_object.longitude }).then((resHotel) => {
          setDataHotel(resHotel);
        });
      });
    } else {
      setTimeout(() => {
        setIsloding((prev) => !prev);
      }, 2000);
    }
  }, [dataHotel]);
  return (
    <SafeAreaView>
      <View style={{ height: 180 }}>
        <ImageBackground source={images.homeScreen} resizeMode="cover" style={{ flex: 1, height: 300, paddingTop: 15, paddingHorizontal: 15 }}>
          <NavigationTop nameIcon="home" title="Home" colorTitle="#F1F5FE" />

          <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput onChangeText={(text) => setSearch(text)} value={search} placeholder="Search" style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#fefefe', elevation: 2 }} />
            <TouchableOpacity onPress={handleSearch} style={{ backgroundColor: '#515778', padding: 8, borderRadius: 50, marginLeft: 10 }}>
              <Icon name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={{ paddingHorizontal: 15, paddingVertical: 25, backgroundColor: '#fff', borderTopLeftRadius: 40, borderTopRightRadius: 40, overflow: 'hidden' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ minHeight: 500, paddingBottom: 360 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 28, letterSpacing: 2 }}>Hotel</Text>
            {isLoading && (
              <View style={{ minHeight: height, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../../assets/image/logo.png')} style={{ width: 100, height: 100 }} />
                <Text>Loading</Text>
              </View>
            )}
            {!isLoading && (
              <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                {dataHotel.length > 0 ? dataHotel?.map((data, index) => (data.name ? <Card item={data} key={index} /> : null)) : null}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
