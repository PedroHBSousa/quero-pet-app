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
import Button from '../../components/Button';
import {FormikProps} from 'formik';
import ImagePickerModal from '../../components/ImagePickerModal';
import {requestCameraPermission} from '../../utils/permissionUtils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types/types';
import Input from '../../components/Formik/Input';

const UserProfileScreen = () => {
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
                justifyContent: 'space-between',
                paddingTop: 25,
              }}>
              <View>
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

              <Input
                label={'Nome completo'}
                placeholder={'Digite seu nome'}
                value={values.name}
                error={errors.name ?? undefined}
                // onBlur={handleBlur('name')}
                // onChangeText={handleChange('name')}
              />

              <View>
                <Button
                  isLoading={isLoading}
                  title="Realizar cadastro"
                  style={{marginBottom: 100}}
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
};

export default UserProfileScreen;
