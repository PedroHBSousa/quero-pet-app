import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/navigation';
import HomeScreen from '../screens/HomeScreen';
import HeaderHome from '../components/HeaderHome';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => <HeaderHome />,
        }}
      />
    </Stack.Navigator>
  );
}
