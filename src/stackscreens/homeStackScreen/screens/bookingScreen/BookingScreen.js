import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../../../assets/style/style';
import { NavigationTop } from '../../component';

export default function BookingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NavigationTop nameIcon="chevron-back" title="Booking" />
      </ScrollView>
    </SafeAreaView>
  );
}
