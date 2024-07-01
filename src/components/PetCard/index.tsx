import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import theme from '../../global/styles/theme';
import {PetType} from '../../interfaces';
import config from '../../global/config';

interface PetCardProps {
  pet: PetType;
}

function PetCard(props: PetCardProps) {
  const {pet} = props;
  const navigation = useNavigation<any>();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PetProfileScreen', {
            pet: pet,
          })
        }>
        <View style={[styles.card, styles.cardElevetad]}>
          <Image
            source={{uri: `${config.BaseUrl}/storage/${pet.banner}`}}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.cardTitle}>{pet.name}</Text>
              {pet.sex == 'M' ? (
                <MaterialIcons
                  name="male"
                  size={32}
                  color={theme.colors.YELLOW}
                  style={styles.icon}
                />
              ) : (
                <MaterialIcons
                  name="female"
                  size={32}
                  color={theme.colors.YELLOW}
                  style={styles.icon}
                />
              )}
            </View>
            <View style={styles.cardDescription}>
              <FontAwesome5
                name="birthday-cake"
                size={15}
                color={theme.colors.YELLOW}
                style={styles.icon}
              />
              <Text style={styles.cardSubTitle}>{pet.age}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PetCard;
