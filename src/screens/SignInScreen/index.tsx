import {Text, View, Image, StatusBar} from 'react-native';
import React, {useContext, useState, useRef} from 'react';
import styles from './styles';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Button from '../../components/Button';
import Logotipo from '../../assets/svg/Logotipo.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types/navigation';
import {ScrollView} from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import {AuthContext} from '../../contexts/Auth';
import {Formik, FormikProps} from 'formik';

interface FormikValues {
  email: string;
  password: string;
}

type SignInScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignInScreen'>;
};

function SingInScreen({navigation}: SignInScreenProp) {
  const {signIn} = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormikProps<FormikValues>>(null);

  const handleSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  // const handleHomeScreen = () => {
  //   navigation.navigate('HomeScreen');
  // };

  async function onSubmit(values: FormikValues) {
    const response = await signIn(values).catch(error => console.log(error));
    // console.log(response.data);
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.containerView}>
        <Formik
          innerRef={formRef}
          onSubmit={onSubmit}
          initialValues={{
            email: '',
            password: '',
          }}>
          {({values, handleBlur, handleChange, handleSubmit}) => (
            <>
              <View style={styles.loginContainer}>
                <Logotipo style={styles.svgLogo} />
                <Input
                  label={'E-mail'}
                  placeholder={'Digite o seu e-mail'}
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                />
                <InputPassword
                  label={'Senha'}
                  placeholder={'Digite sua senha'}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                />
                <Button
                  title={'Entrar'}
                  style={{marginTop: 10}}
                  onPress={handleSubmit}
                />
                <Text
                  style={styles.textPassword}
                  onPress={() => {
                    handleSignUpScreen();
                  }}>
                  Abrir Conta
                </Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

export default SingInScreen;
