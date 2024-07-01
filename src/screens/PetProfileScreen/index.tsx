import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Button from '../../components/Button';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import config from '../../global/config';
import {PetContext} from '../../contexts/PetContext';
import Toast from '../../utils/toastUtils';

interface PetProfileScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PetProfileScreen'>;
}

const PetProfileScreen = (props: PetProfileScreenProps) => {
  const {navigation} = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute<RouteProp<RootStackParamList, 'PetProfileScreen'>>();
  const params = route.params;
  const pet = params.pet;

  const {adoptPet, orders} = useContext(PetContext);
  const alreadyAdopted = orders.some(order => order.pet.id === pet.id);

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

  async function handleAdopt() {
    setIsLoading(true);
    try {
      await adoptPet(pet.id);
      Toast.show('Adoção solicitada com sucesso!');
    } catch (error) {
      // ...
    } finally {
      setIsLoading(false);
    }
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
          source={{uri: `${config.BaseUrl}/storage/${pet.banner}`}}
          style={styles.imagePetProfile}
        />
        <View style={styles.informationContainer}>
          <Text style={styles.namePetProfile}>{pet.name}</Text>
          <View style={styles.locationInformation}>
            <MaterialCommunityIcons
              size={30}
              name="map-marker"
              color={'#FFD166'}
            />
            <Text style={styles.locationName}>
              {pet.ong.user.address.street}
            </Text>
          </View>
          <View style={styles.infomartionItemContainer}>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>
                {pet.sex === 'M' ? 'Macho' : 'Fêmea'}
              </Text>
              <Text style={styles.subtitleItem}>Sexo</Text>
            </View>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>{pet.color}</Text>
              <Text style={styles.subtitleItem}>Cor</Text>
            </View>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>{pet.weight}</Text>
              <Text style={styles.subtitleItem}>Peso</Text>
            </View>
            <View style={styles.informationItem}>
              <Text style={styles.titleItem}>{pet.age}</Text>
              <Text style={styles.subtitleItem}>Idade</Text>
            </View>
          </View>
          <Text numberOfLines={5} style={styles.descriptionPet}>
            {pet.description}
          </Text>
        </View>
        <View
          style={{
            padding: 30,
            position: 'absolute',
            width: '100%',
            bottom: 0,
          }}>
          {!alreadyAdopted && (
            <Button
              isLoading={isLoading}
              onPress={() => handleAdopt()}
              title="Adote-me"
            />
          )}
        </View>
      </View>
    </React.Fragment>
  );
};

export default PetProfileScreen;
