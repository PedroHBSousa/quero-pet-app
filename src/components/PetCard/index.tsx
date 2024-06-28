import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import theme from '../../global/styles/theme';

interface PetCardProps {
  pet: {};
}

function PetCard(props: PetCardProps) {
  const navigation = useNavigation<any>();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('PetProfileScreen')}>
        <View style={[styles.card, styles.cardElevetad]}>
          <Image
            source={require('../../components/PetCard/dog.jpg')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.cardTitle}>Denguinho</Text>
              <MaterialIcons
                name="male"
                size={32}
                color={theme.colors.YELLOW}
                style={styles.icon}
              />
            </View>
            <View style={styles.cardDescription}>
              <FontAwesome5
                name="birthday-cake"
                size={15}
                color={theme.colors.YELLOW}
                style={styles.icon}
              />
              <Text style={styles.cardSubTitle}>18 meses</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PetCard;
