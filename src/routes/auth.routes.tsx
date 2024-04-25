import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';
const { Navigator, Screen } = createNativeStackNavigator();
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpAddressScreen from '../screens/SignUpAddressScreen';
import SignUpPhotoScreen from '../screens/SignUpPhotoScreen';
import HomeScreen from '../screens/HomeScreen';
import HeaderHome from '../components/HeaderHome';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
      }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUpAddressScreen" component={SignUpAddressScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignUpPhotoScreen" component={SignUpPhotoScreen} options={{headerShown:false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
        header: () => (
          <HeaderHome
            name="Lucas"
            
          />)
      }} />
    </Stack.Navigator>
  );
}
