import {View, Text, StatusBar} from 'react-native';
import {Masks} from 'react-native-mask-input';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import Input from '../../components/Formik/Input';
import InputSex from '../../components/Formik/InputSex';
import InputPassword from '../../components/Formik/InputPassword';
import Header from '../../components/Header';
import InputMask from '../../components/Formik/InputMask';
import {Formik} from 'formik';
import Button from '../../components/Button';
import {useState, useRef} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types/navigation';

interface FormikValues {
  cpf: string;
  birth: string;
  password: string;
  sex: string;
}

type SignUpScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUpScreen'>;
};

function SignUpScreen({navigation}: SignUpScreenProp) {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(values: FormikValues) {
    setIsLoading(true);
    navigation.navigate('SignUpAddressScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.BACKGROUND}
        />

        <View style={styles.main}>
          <View>
            <Text style={styles.titleXl}>Cadastre-se para começar.</Text>
            <Text style={[styles.text, {marginBottom: 45}]}>
              Cada cadastro é uma nova oportunidade de mudar uma vida.
            </Text>
            <Formik
              ref={formRef}
              onSubmit={onSubmit}
              initialValues={{
                cpf: '',
                birth: '',
                password: '',
                sex: '',
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                setFieldValue,
              }) => (
                <>
                  <Input
                    label={'E-mail'}
                    placeholder={'Digite seu e-mail'}
                    containerStyle={{marginTop: 0}}
                  />

                  <Input
                    label={'Nome completo'}
                    placeholder={'Digite seu nome'}
                  />

                  <InputMask
                    mask={Masks.BRL_CPF}
                    label={'CPF'}
                    placeholder={'Digite seu CPF'}
                    value={values.cpf}
                    onChangeText={handleChange('cpf')}
                    keyboardType="numeric"
                  />

                  <InputMask
                    mask={Masks.DATE_DDMMYYYY}
                    label={'Data de nascimento'}
                    value={values.birth}
                    onChangeText={handleChange('birth')}
                    placeholder={'Digite sua data de nascimento'}
                    keyboardType="numeric"
                  />
                  <InputPassword
                    label={'Senha'}
                    placeholder={'Digite sua senha'}
                    onChangeText={handleChange('password')}
                  />
                  <InputPassword
                    label={'Confirmar senha'}
                    placeholder={'Confirme sua senha'}
                    onChangeText={handleChange('confirm_password')}
                  />
                  <InputSex
                    label={'Sexo'}
                    style={{marginTop: 15}}
                    value={values.sex}
                    formRef={formRef}
                  />
                  <Button
                    isLoading={isLoading}
                    title={'Próximo passo'}
                    style={{marginTop: 30}}
                    onPress={() => {
                      if (!isLoading) {
                        handleSubmit();
                      }
                    }}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUpScreen;
