import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import HomeTab from './src/navigation/tabNavigator/home/HomeTab';
import LoginScreen from './src/navigation/screens/settingScreen/loginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeTab" component={HomeTab} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
      </NavigationContainer>
    </Provider>
  );
}
