import { Text, View, Image } from 'react-native';
import styles from './styles';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Button from '../../components/Button';
import Frame2 from '../../assets/svg/Frame2.svg';
import Logotipo from '../../assets/svg/Logotipo.svg';

function SingInScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.loginContainer}>
        <Logotipo style={styles.svgLogo} />

        <Input
          label={'E-mail'}
          placeholder={'Digite o seu e-mail'}
        />
        <InputPassword
          label={'Senha'}
          placeholder={'Digite sua senha'}
        />
        <Button
          title={'Entrar'}
          style={{ marginTop: 10, }}
        />
        <Text style={styles.textPassword}>
          Abrir Conta
        </Text>
      </View>
      <Frame2 style={styles.svg} />

    </View>

  );
}

export default SingInScreen;
