import { Text, View, Image, StatusBar } from 'react-native';
import React from 'react';
import styles from './styles';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Button from '../../components/Button';
import Logotipo from '../../assets/svg/Logotipo.svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types/navigation';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

type SignInScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignInScreen'>;
};

function SingInScreen({ navigation }: SignInScreenProp) {
  const handleSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  }



  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'#fff'}
      />
      <View style={styles.containerView}>
        <View style={styles.loginContainer}>
          <Logotipo style={styles.svgLogo} />
          <Input label={'E-mail'} placeholder={'Digite o seu e-mail'} />
          <InputPassword label={'Senha'} placeholder={'Digite sua senha'} />
          <Button
            title={'Entrar'}
            style={{ marginTop: 10 }}
            onPress={() => {
              handleHomeScreen();
            }} />
          <Text
            style={styles.textPassword}
            onPress={() => {
              handleSignUpScreen();
            }}>
            Abrir Conta
          </Text>
        </View>
        {/* <Frame2 style={styles.svgSignUp} /> */}
      </View>
    </ScrollView>
  );
}

export default SingInScreen;
