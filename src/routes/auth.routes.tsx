import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/navigation';
const {Navigator, Screen} = createNativeStackNavigator();
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpAddressScreen from '../screens/SignUpAddressScreen';
import SignUpPhotoScreen from '../screens/SignUpPhotoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="SignUpAddressScreen"
        component={SignUpAddressScreen}
      />
      <Stack.Screen name="SignUpPhotoScreen" component={SignUpPhotoScreen} />
    </Stack.Navigator>
  );
}
