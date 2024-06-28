import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Button from '../../components/Button';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import styles from './styles';
import ImagePickerModal from '../../components/ImagePickerModal';

const PetProfileScreen = ({navigation}) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          backgroundColor: theme.colors.TESTE,
          borderRadius: 20,
          position: 'absolute',
          bottom: 20,
          left: 14,
          right: 14,
          elevation: 10,
        },
      });
    };
  }, [navigation]);

  const [isVisible, setIsVisible] = useState(false);

  const modalRef = useRef(null);

  function handleToggleModal() {
    if (isVisible) {
      modalRef.current?.close();
    } else {
      modalRef.current?.open();
    }

    setIsVisible(!isVisible);
  }
  return (
    <React.Fragment>
      <Header
        customStyles={{position: 'absolute', top: 0, zIndex: 1000}}
        iconColor="#000"
        buttonStyles={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 50,
          width: 45,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View style={styles.container}>
        <Image
          source={require('../../screens/PetProfileScreen/dog.jpg')}
          style={styles.imagePetProfile}
        />
        <View style={styles.informationContainer}>
          <Text style={styles.namePetProfile}>Denguinho</Text>
          <View style={styles.locationInformation}>
            <MaterialCommunityIcons
              size={30}
              name="map-marker"
              color={'#FFD166'}
            />
            <Text style={styles.locationName}>Pontal de Santa Marina</Text>
          </View>
          <View style={styles.infomartionItemContainer}>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>Macho</Text>
              <Text style={styles.subtitleItem}>Sexo</Text>
            </View>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>Misto</Text>
              <Text style={styles.subtitleItem}>Cor</Text>
            </View>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>2kg</Text>
              <Text style={styles.subtitleItem}>Peso</Text>
            </View>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>3 Meses</Text>
              <Text style={styles.subtitleItem}>Idade</Text>
            </View>
          </View>
          <Text style={styles.descriptionPet}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            pellentesque velit donec congue. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit pellentesque
          </Text>
        </View>
        <View
          style={{
            padding: 30,
            position: 'absolute',
            width: '100%',
            bottom: 0,
          }}>
          <Button onPress={handleToggleModal} title="Adote-me" />
        </View>
      </View>
      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          scrollViewProps={{showsVerticalScrollIndicator: false}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onClose={() => {
            setIsVisible(false);
          }}>
          <View style={{padding: 20}}>
            <Text style={styles.titleModalize}>
              Para adotar o Denguinho, você precisa enviar os seguintes
              documentos:
            </Text>
            <TouchableOpacity style={styles.uploadContainer}>
              <MaterialIcons
                size={35}
                name="upload-file"
                color={theme.colors.TESTE}
              />
              <Text style={styles.titleUpload}>
                Certidão de Antecedentes Criminais
              </Text>
            </TouchableOpacity>
            <Button title="Solicitar Adoção" />
          </View>
        </Modalize>
      </Portal>
    </React.Fragment>
  );
};

export default PetProfileScreen;
