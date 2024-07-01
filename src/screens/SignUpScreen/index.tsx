import {useState, useRef} from 'react';
import {View, Text, StatusBar, Keyboard} from 'react-native';
import {Masks} from 'react-native-mask-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';

import styles from './styles';
import theme from '../../global/styles/theme';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Header from '../../components/Header';
import InputMask from '../../components/Formik/InputMask';
import Button from '../../components/Button';
import {RootStackParamList} from '../../routes/types';
import {setValidationErrors} from '../../utils/yupUtils';

const userSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  cpf: Yup.string().required('CPF é obrigatório'),
  birth_date: Yup.string().required('Data de nascimento é obrigatória'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória'),
  phone: Yup.string().required('Telefone é obrigatório'),
});

export interface SubmitSignUpValues {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  cpf: string;
  birth_date: string;
  phone: string;
}

interface SignUpScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUpScreen'>;
}

function SignUpScreen(props: SignUpScreenProps) {
  const {navigation} = props;

  const formRef = useRef<FormikProps<SubmitSignUpValues>>(null);
  const scrollRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(values: SubmitSignUpValues) {
    setIsLoading(true);
    try {
      userSchema.validateSync(values, {abortEarly: false});
      Keyboard.dismiss();

      navigation.navigate('SignUpAddressScreen', {
        ...values,
        birth_date: values.birth_date.split('/').reverse().join('-'),
      });
    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef as any, errors);
      }
      (scrollRef.current as ScrollView | null)?.scrollTo({
        y: 0,
        animated: true,
      });
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
            <Text style={[styles.text, {marginBottom: 45}]}>
              Cada cadastro é uma nova oportunidade de mudar uma vida.
            </Text>
            <Formik
              innerRef={formRef}
              onSubmit={onSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{
                name: '',
                cpf: '',
                birth_date: '',
                password: '',
                confirm_password: '',
                email: '',
                phone: '',
              }}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <>
                  <Input
                    label={'E-mail'}
                    placeholder={'Digite seu e-mail'}
                    value={values.email}
                    error={errors.email ?? undefined}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    containerStyle={{marginTop: 0}}
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
                    value={values.birth_date}
                    onChangeText={handleChange('birth_date')}
                    error={errors.birth_date ?? undefined}
                    onBlur={handleBlur('birth_date')}
                    placeholder={'Digite sua data de nascimento'}
                    keyboardType="numeric"
                  />

                  <InputMask
                    mask={Masks.BRL_PHONE}
                    label={'Telefone'}
                    placeholder={'Digite seu telefone'}
                    value={values.phone}
                    error={errors.phone ?? undefined}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
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
