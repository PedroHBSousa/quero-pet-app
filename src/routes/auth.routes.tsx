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
import { View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="SignUpAddressScreen"
        component={SignUpAddressScreen}
      />
      <Stack.Screen name="SignUpPhotoScreen" component={SignUpPhotoScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
        headerTitle: () => <HeaderHome name="Pets Carentes" />,
        headerStyle:{
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          paddingVertical: 10,
          paddingHorizontal: 20,
        },
      }} />
    </Stack.Navigator>
  );
}
