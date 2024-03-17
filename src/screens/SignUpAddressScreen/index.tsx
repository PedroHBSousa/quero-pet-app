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
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types/navigation';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Header from '../../components/Header';
import theme from '../../global/styles/theme';
import Input from '../../components/Formik/Input';
import InputMask from '../../components/Formik/InputMask';
import {Masks} from 'react-native-mask-input';
import axios from 'axios';

interface FormikValues {
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
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const formRef = useRef(null);
  const scrollRef = useRef(null);

  function onSubmit(values: FormikValues) {
    navigation.navigate('SignInScreen');
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
            ref={formRef}
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
                  name="state"
                />

                <Input
                  label={'Cidade'}
                  placeholder={'Digite sua cidade'}
                  value={values.city}
                  error={errors.city ?? undefined}
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  name="city"
                />

                <Input
                  label={'Bairro'}
                  placeholder={'Digite seu bairro'}
                  value={values.neighborhood}
                  error={errors.neighborhood ?? undefined}
                  onChangeText={handleChange('neighborhood')}
                  onBlur={handleBlur('neighborhood')}
                  name="neighborhood"
                />

                <Input
                  label={'Rua'}
                  placeholder={'Digite sua rua'}
                  value={values.street}
                  error={errors.street ?? undefined}
                  onChangeText={handleChange('street')}
                  onBlur={handleBlur('street')}
                  name="street"
                />

                <Input
                  label={'Número'}
                  placeholder={'Digite o número'}
                  value={values.number}
                  error={errors.number ?? undefined}
                  onChangeText={handleChange('number')}
                  onBlur={handleBlur('number')}
                  keyboardType="numeric"
                  name="number"
                />

                <Input
                  label={'Complemento (Opcional)'}
                  placeholder={'Digite o complemento'}
                  value={values.complement}
                  error={errors.complement ?? undefined}
                  onChangeText={handleChange('complement')}
                  onBlur={handleBlur('complement')}
                  name="complement"
                />

                <Button
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
