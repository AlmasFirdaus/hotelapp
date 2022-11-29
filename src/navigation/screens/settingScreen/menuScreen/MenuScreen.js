import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationTop } from '../../../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
  const { height } = Dimensions.get('screen');
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#fff' }}>
        <NavigationTop nameIcon="arrow-back" title="Setting" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 15 }}>
        <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8 }}>
          <View style={{ marginBottom: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}>SUPPORT</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>{!profile.isLogin && <Text style={{ lineHeight: 24, fontSize: 16 }}>Login</Text>}</TouchableOpacity>
            <TouchableOpacity>{profile.isLogin && <Text style={{ lineHeight: 24, fontSize: 16 }}>Logout</Text>}</TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
