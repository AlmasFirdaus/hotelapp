import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={screens.HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailCard" component={screens.DetailCard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
