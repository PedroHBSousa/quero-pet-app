import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import theme from '../../global/styles/theme';

function PetCard() {
    return (
        <View>
            <TouchableOpacity>
                <View style={[styles.card, styles.cardElevetad]}>
                    <Image source={require('../../components/PetCard/dog.jpg')} style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={styles.cardTitle}>
                                Denguinho
                            </Text>
                            <MaterialIcons name="male" size={32} color={theme.colors.YELLOW} style={styles.icon} />
                        </View>
                        <View style={styles.cardDescription}>
                            <FontAwesome5 name="birthday-cake" size={15} color={theme.colors.YELLOW} style={styles.icon} />
                            <Text style={styles.cardSubTitle}>18 meses</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
}

export default PetCard;