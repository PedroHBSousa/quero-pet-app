import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();
import SignInScreen from '../screens/SignInScreen';

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SignInScreen" component={SignInScreen} />
    </Navigator>
  );
}
