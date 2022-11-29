import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/homeScreen/HomeScreen';
import BookingScreen from '../screens/homeScreen/bookingScreen/BookingScreen';
import DetailCard from '../screens/homeScreen/detailCardScreen/DetailCard';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailCard" component={DetailCard} />
      <HomeStack.Screen name="BookingScreen" component={BookingScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
