import {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {FormikProps} from 'formik';
import ImagePickerModal from '../../components/ImagePickerModal';
import {requestCameraPermission} from '../../utils/permissionUtils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types/navigation';

type SignUpAddressScreen = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SignUpAddressScreen'
  >;
};

interface FormikValues {
  photo: {
    uri: string;
    type: string;
    name: string;
  };
}

function SignUpPhotoScreen({navigation}: SignUpAddressScreen) {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisiblePhotoModal, setIsVisiblePhotoModal] = useState(false);

  const formRef = useRef<FormikProps<FormikValues>>(null);
  const scrollRef = useRef(null);

  async function onSubmit(values: FormikValues) {
    setIsLoading(true);
  }

  function handlePickImage() {
    requestCameraPermission().then(response => {
      if (response) {
        setIsVisiblePhotoModal(true);
      }
    });
  }

  function onImageSelected(response: any) {
    if (response.assets) {
      const assets = response.assets[0];

      formRef.current?.setFieldValue('photo', {
        uri: assets.uri,
        type: assets.type,
        name: assets.fileName,
      });
    }
  }

  function onRemoveImage() {
    formRef.current?.setFieldValue('photo', {
      uri: '',
      type: '',
      name: '',
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Header />
        <Formik
          innerRef={formRef}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            photo: {
              uri: '',
              type: '',
              name: '',
            },
          }}>
          {({handleSubmit, values, errors}) => (
            <View
              style={{
                flex: 1,
                paddingHorizontal: 25,
                paddingBottom: 25,
                justifyContent: 'space-between',
              }}>
              <View>
                <View>
                  <Text style={styles.titleXl}>Foto de perfil.</Text>
                  <Text style={[styles.text, {marginBottom: 45}]}>
                    Por último, precisamos que você adicione uma foto de perfil
                    para a sua identicação.
                  </Text>
                </View>

                {values.photo.uri === '' ? (
                  <View style={[styles.wrapperPhoto, {marginBottom: 35}]}>
                    <View style={[styles.photo, {position: 'relative'}]}>
                      <Feather name="user" size={38} color={'#969CB2'} />

                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonPickPhoto}
                        onPress={() => {
                          handlePickImage();
                        }}>
                        <FontAwesome
                          name="camera"
                          size={16}
                          color={theme.colors.SHAPE}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={[styles.wrapperPhoto, {marginBottom: 35}]}>
                    <View style={{position: 'relative'}}>
                      <Image
                        source={{uri: values.photo.uri}}
                        style={styles.photo}
                      />

                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonPickPhoto}
                        onPress={() => {
                          handlePickImage();
                        }}>
                        <FontAwesome
                          name="camera"
                          size={16}
                          color={theme.colors.SHAPE}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

                {errors.photo?.uri && (
                  <Text style={styles.textSm}>• {errors.photo.uri}</Text>
                )}

                <ImagePickerModal
                  isVisible={isVisiblePhotoModal}
                  hasRemoveOption={values.photo.uri !== ''}
                  onClose={() => setIsVisiblePhotoModal(false)}
                  onImageSelected={onImageSelected}
                  onRemoveImage={onRemoveImage}
                />
              </View>

              <View>
                <Button
                  isLoading={isLoading}
                  title="Realizar cadastro"
                  style={{marginTop: 30}}
                  onPress={() => {
                    if (!isLoading) {
                      handleSubmit();
                    }
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUpPhotoScreen;
