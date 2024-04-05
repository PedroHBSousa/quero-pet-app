import { View, Text, StatusBar, Keyboard } from 'react-native';
import { Masks } from 'react-native-mask-input';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import Input from '../../components/Formik/Input';
import InputSex from '../../components/Formik/InputSex';
import InputPassword from '../../components/Formik/InputPassword';
import Header from '../../components/Header';
import InputMask from '../../components/Formik/InputMask';
import { Formik, FormikProps } from 'formik';
import Button from '../../components/Button';
import { useState, useRef } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types/navigation';
import * as Yup from 'yup';
import { setValidationErrors } from '../../utils/yupUtils';

const userSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  cpf: Yup.string().required('CPF é obrigatório'),
  sex: Yup.string().required('Sexo é obrigatório'),
  birth: Yup.string().required('Data de nascimento é obrigatória'),
  password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
  confirm_password: Yup.string().oneOf([Yup.ref('password'),], 'As senhas devem ser iguais').required('Confirmação de senha é obrigatória'),
});

interface FormikValues {
  name: string;
  cpf: string;
  birth: string;
  password: string;
  confirm_password: string;
  sex: string;
  email: string;
}

type SignUpScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUpScreen'>;
};

function SignUpScreen({ navigation }: SignUpScreenProp) {
  const formRef = useRef<FormikProps<FormikValues>>(null);
  const scrollRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);


  function onSubmit(values: FormikValues) {

    setIsLoading(true);


    try {
      userSchema.validateSync(values, { abortEarly: false });
      Keyboard.dismiss();

      const data = {
        ...values,
        birth: values.birth.split('/').reverse().join('-'),
      }
      navigation.navigate('SignUpAddressScreen');

    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef as any, errors);
      }
      
      (scrollRef.current as ScrollView | null)?.scrollTo({ y: 0, animated: true });

    } finally {
      setIsLoading(false);
    }
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
              <Text style={[styles.text, { marginBottom: 45 }]}>
                Cada cadastro é uma nova oportunidade de mudar uma vida.
              </Text>
              <Formik
                innerRef={formRef}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                  cpf: '',
                  birth: '',
                  password: '',
                  sex: '',
                  confirm_password: '',
                  email: '',
                  name: '',
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
                      value={values.email}
                      error={errors.email ?? undefined}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      containerStyle={{ marginTop: 0 }}
                    />

                    <Input
                      label={'Nome completo'}
                      placeholder={'Digite seu nome'}
                      value={values.name}
                      error={errors.name ?? undefined}
                      onBlur={handleBlur('name')}
                      onChangeText={handleChange('name')}
                    />

                    <InputMask
                      mask={Masks.BRL_CPF}
                      label={'CPF'}
                      placeholder={'Digite seu CPF'}
                      error={errors.cpf ?? undefined}
                      onBlur={handleBlur('cpf')}
                      value={values.cpf}
                      onChangeText={handleChange('cpf')}
                      keyboardType="numeric"
                    />

                    <InputMask
                      mask={Masks.DATE_DDMMYYYY}
                      label={'Data de nascimento'}
                      value={values.birth}
                      onChangeText={handleChange('birth')}
                      error={errors.birth ?? undefined}
                      onBlur={handleBlur('birth')}
                      placeholder={'Digite sua data de nascimento'}
                      keyboardType="numeric"
                    />
                    <InputPassword
                      label={'Senha'}
                      placeholder={'Digite sua senha'}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      error={errors.password ?? undefined}
                      onBlur={handleBlur('password')}
                    />
                    <InputPassword
                      label={'Confirmar senha'}
                      placeholder={'Confirme sua senha'}
                      value={values.confirm_password}
                      error={errors.confirm_password ?? undefined}
                      onChangeText={handleChange('confirm_password')}
                      onBlur={handleBlur('confirm_password')}
                    />
                    <InputSex
                      label={'Sexo'}
                      style={{ marginTop: 15 }}
                      value={values.sex}
                      formRef={formRef}
                    />
                    <Button
                      isLoading={isLoading}
                      title={'Próximo passo'}
                      style={{ marginTop: 30 }}
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
