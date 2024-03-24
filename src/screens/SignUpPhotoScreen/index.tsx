import {View, Text} from 'react-native';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types/navigation';

type SignUpAddressScreen = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SignUpAddressScreen'
  >;
};

function SignUpPhotoScreen({navigation}: SignUpAddressScreen) {
  return (
    <View>
      <Text style={{color: '#000'}}>Teste</Text>
    </View>
  );
}
export default SignUpPhotoScreen;
