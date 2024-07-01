import React, {useContext, useState, useRef} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './styles';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Button from '../../components/Button';
import Logotipo from '../../assets/svg/Logotipo.svg';
import {RootStackParamList} from '../../routes/types';
import {AuthContext} from '../../contexts/AuthContext';
import {Formik, FormikProps} from 'formik';
import Toast from '../../utils/toastUtils';

interface FormikValues {
  email: string;
  password: string;
}

type SignInScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignInScreen'>;
};

function SingInScreen(props: SignInScreenProp) {
  const {navigation} = props;

  const [isLoading, setIsLoading] = useState(false);

  const {signIn} = useContext(AuthContext);
  const formRef = useRef<FormikProps<FormikValues>>(null);

  async function onSubmit(values: FormikValues) {
    setIsLoading(true);
    try {
      await signIn(values);
    } catch (error) {
      console.log('An error occurred while trying to sign in: ', error);
    } finally {
      setIsLoading(false);
    }
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
                  isLoading={isLoading}
                  title={'Entrar'}
                  style={{marginTop: 10}}
                  onPress={handleSubmit}
                />
                <Text
                  style={styles.textPassword}
                  onPress={() => {
                    navigation.navigate('SignUpScreen');
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
