import {Text, View, Image} from 'react-native';
import styles from './styles';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Button from '../../components/Button';
import Logotipo from '../../assets/svg/Logotipo.svg';
import Frame2 from '../../assets/svg/frame.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types/navigation';
import {ScrollView} from 'react-native-gesture-handler';

type SignInScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignInScreen'>;
};

function SingInScreen({navigation}: SignInScreenProp) {
  const handleSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.containerView}>
        <View style={styles.loginContainer}>
          <Logotipo style={styles.svgLogo} />
          <Input label={'E-mail'} placeholder={'Digite o seu e-mail'} />
          <InputPassword label={'Senha'} placeholder={'Digite sua senha'} />
          <Button title={'Entrar'} style={{marginTop: 10}} />
          <Text
            style={styles.textPassword}
            onPress={() => {
              handleSignUpScreen();
            }}>
            Abrir Conta
          </Text>
        </View>
        <Frame2 style={styles.svgSignUp} />
      </View>
    </ScrollView>
  );
}

export default SingInScreen;
