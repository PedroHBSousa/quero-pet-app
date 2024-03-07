import { Text, View, Image } from 'react-native';
import styles from './styles';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SingInScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/Logotipo.png')}
      />
      <Input
        label={'E-mail'}
        placeholder={'Digite o seu e-mail'}
      />
      <InputPassword
        label={'Senha'}
        placeholder={'Digite sua senha'}
      />
    <EntypoIcon name="video-camera" size={30} color="red" />
      <Feather name="airplay" size={22} color={'#969CB2'} />
      <FontAwesome name="cog" size={22} color={'#969CB2'} />
      <Icon.Button name="facebook" backgroundColor="#3b5998"> Login with Facebook </Icon.Button>
    </View>

  );
}

export default SingInScreen;
