import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen, DetailCard, HomeScreen } from './screens';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="DetailCard" component={DetailCard} />
      <HomeStack.Screen name="BookingScreen" component={BookingScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
