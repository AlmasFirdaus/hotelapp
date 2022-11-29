import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/settingScreen/menuScreen/MenuScreen';
import ProfileScreen from '../screens/settingScreen/profileScreen/ProfileScreen';
import LoginScreen from '../screens/settingScreen/loginScreen/LoginScreen';

const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingStack.Screen name="MenuScreen" component={MenuScreen} />
      <SettingStack.Screen name="ProfileScreen" component={ProfileScreen} />
      {/* <SettingStack.Screen name="LoginScreen" component={LoginScreen} /> */}
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
