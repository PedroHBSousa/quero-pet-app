import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import Header from '../../components/Header';
import theme from '../../global/styles/theme';
import {PetContext} from '../../contexts/PetContext';
import config from '../../global/config';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types';

interface AdoptionRequestScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

const AdoptionRequestScreen = ({navigation}: AdoptionRequestScreenProps) => {
  const {orders} = useContext(PetContext);
  return (
    <React.Fragment>
      <Header
        title="Solicitações de adoção"
        customStyles={{backgroundColor: theme.colors.TESTE}}
        customText={{color: theme.colors.GREY_LIGHT}}
        isDisabledBack={true}
      />
      <View style={styles.container}>
        {orders.map(order => (
          <View style={styles.adoptionApplicationCard} key={order.id}>
            <Image
              source={{uri: `${config.BaseUrl}/storage/${order.pet.banner}`}}
              style={styles.imagePet}
            />
            <View style={styles.informationContainer}>
              <Text style={styles.titleCard}>{order.pet.name}</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusTitle}>Aprovado</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </React.Fragment>
  );
};

export default AdoptionRequestScreen;
