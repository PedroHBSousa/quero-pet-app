import { Text, View, Image } from 'react-native';
import styles from './styles';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Button from '../../components/Button';
import Frame from '../../assets/svg/Frame1.svg';


function SingInScreen() {
  return (
    <View style={styles.container}>

      <Frame style={styles.svg}/>
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
      <Button
        title={'Entrar'}
        style={{ marginTop: 10 }}
      />
      <Text style={styles.textPassword}>
        Abrir Conta
      </Text>

    </View>

  );
}

export default SingInScreen;
