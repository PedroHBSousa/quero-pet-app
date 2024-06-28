import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpAddressScreen from '../screens/SignUpAddressScreen';
import SignUpPhotoScreen from '../screens/SignUpPhotoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddressScreen"
        component={SignUpAddressScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpPhotoScreen"
        component={SignUpPhotoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
