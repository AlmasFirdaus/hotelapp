import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { BookingScreen, DetailCard, HomeScreen } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailCard" component={DetailCard} options={{ headerShown: false }} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
    </NavigationContainer>
  );
}
