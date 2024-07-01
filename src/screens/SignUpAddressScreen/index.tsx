import {useRef, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Formik, FormikProps} from 'formik';
import {Masks} from 'react-native-mask-input';
import {useRoute, RouteProp} from '@react-navigation/native';
import * as Yup from 'yup';
import axios from 'axios';

import styles from './styles';
import {RootStackParamList} from '../../routes/types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import theme from '../../global/styles/theme';
import Input from '../../components/Formik/Input';
import InputMask from '../../components/Formik/InputMask';
import {setValidationErrors} from '../../utils/yupUtils';

const schema = Yup.object().shape({
  zip_code: Yup.string().required('O CEP é obrigatório'),
  state: Yup.string().required('O estado é obrigatório'),
  city: Yup.string().required('A cidade é obrigatória'),
  neighborhood: Yup.string().required('O bairro é obrigatório'),
  street: Yup.string().required('A rua é obrigatória'),
  number: Yup.string().required('O número é obrigatório'),
});

export interface SubmitSignUpAddressValues {
  zip_code: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
}

type SignUpAddressScreen = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SignUpAddressScreen'
  >;
};

function SignUpAddressScreen({navigation}: SignUpAddressScreen) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

  const route =
    useRoute<RouteProp<RootStackParamList, 'SignUpAddressScreen'>>();
  const params = route.params;

  const formRef = useRef<FormikProps<SubmitSignUpAddressValues>>(null);
  const scrollRef = useRef(null);

  function onSubmit(values: SubmitSignUpAddressValues) {
    setIsLoading(true);
    try {
      schema.validateSync(values, {abortEarly: false});
      Keyboard.dismiss();
      navigation.navigate('SignUpPhotoScreen', {
        ...params,
        ...values,
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

  async function autoFillAddressByZipCode(text: string) {
    setIsLoadingAddress(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${text}/json`);
      (formRef.current as any)?.setFieldValue('state', response.data.uf);
      (formRef.current as any)?.setFieldValue('city', response.data.localidade);
      (formRef.current as any)?.setFieldValue(
        'neighborhood',
        response.data.bairro,
      );
      (formRef.current as any)?.setFieldValue(
        'street',
        response.data.logradouro,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingAddress(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        <Header />
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.BACKGROUND}
        />
        <View style={styles.main}>
          <View>
            <Text style={styles.titleXl}>Adicione seu endereço.</Text>
            <Text style={[styles.text, {marginBottom: 45}]}>
              Para que possamos encontrar os melhores profissionais para você.
            </Text>
          </View>

          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              zip_code: '',
              state: '',
              city: '',
              neighborhood: '',
              street: '',
              number: '',
              complement: '',
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <>
                <View style={{position: 'relative'}}>
                  <InputMask
                    label={'CEP'}
                    placeholder={'Digite seu CEP'}
                    mask={Masks.ZIP_CODE}
                    containerStyle={{marginTop: 0}}
                    value={values.zip_code}
                    error={errors.zip_code ?? undefined}
                    onBlur={handleBlur('zip_code')}
                    keyboardType="numeric"
                    name="zip_code"
                    onChangeText={(text: string) => {
                      (formRef.current as any)?.setFieldValue('zip_code', text);
                      if (text.length === 9 && !isLoadingAddress) {
                        autoFillAddressByZipCode(text.replace('-', ''));
                      }
                    }}
                  />

                  {isLoadingAddress && (
                    <View style={{position: 'absolute', right: 20, top: 52.5}}>
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.TEXT}
                      />
                    </View>
                  )}
                </View>

                <Text style={[styles.text, {marginBottom: 15, fontSize: 14}]}>
                  <Text style={{color: theme.colors.PRIMARY}}>Observação:</Text>{' '}
                  Informe o CEP para preencher os campos abaixo.
                </Text>

                <Input
                  label={'Estado'}
                  placeholder={'Digite seu estado'}
                  value={values.state}
                  error={errors.state ?? undefined}
                  onChangeText={handleChange('state')}
                  onBlur={handleBlur('state')}
                />

                <Input
                  label={'Cidade'}
                  placeholder={'Digite sua cidade'}
                  value={values.city}
                  error={errors.city ?? undefined}
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  id="city"
                />

                <Input
                  label={'Bairro'}
                  placeholder={'Digite seu bairro'}
                  value={values.neighborhood}
                  error={errors.neighborhood ?? undefined}
                  onChangeText={handleChange('neighborhood')}
                  onBlur={handleBlur('neighborhood')}
                />

                <Input
                  label={'Rua'}
                  placeholder={'Digite sua rua'}
                  value={values.street}
                  error={errors.street ?? undefined}
                  onChangeText={handleChange('street')}
                  onBlur={handleBlur('street')}
                />

                <Input
                  label={'Número'}
                  placeholder={'Digite o número'}
                  value={values.number}
                  error={errors.number ?? undefined}
                  onChangeText={handleChange('number')}
                  onBlur={handleBlur('number')}
                  keyboardType="numeric"
                />

                <Input
                  label={'Complemento (Opcional)'}
                  placeholder={'Digite o complemento'}
                  value={values.complement}
                  error={errors.complement ?? undefined}
                  onChangeText={handleChange('complement')}
                  onBlur={handleBlur('complement')}
                />

                <Button
                  isLoading={isLoading}
                  title="Próximo passo"
                  style={{marginTop: 30}}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUpAddressScreen;
