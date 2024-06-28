import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HeaderHome from '../components/HeaderHome';
import PetProfileScreen from '../screens/PetProfileScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import AdoptionRequestScreen from '../screens/AdoptionRequestScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../global/styles/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true, headerTransparent: true}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => <HeaderHome />}}
      />
      <Stack.Screen
        name="PetProfileScreen"
        component={PetProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function AdoptionStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true, headerTransparent: true}}>
      <Stack.Screen
        name="AdoptionRequestScreen"
        component={AdoptionRequestScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export function PrivateRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          backgroundColor: theme.colors.TESTE,
          borderRadius: 20,
          position: 'absolute',
          bottom: 20,
          left: 14,
          right: 14,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: theme.fonts.REGULAR,
        },
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Adoçoes"
        component={AdoptionStack}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'script' : 'script-outline'}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
