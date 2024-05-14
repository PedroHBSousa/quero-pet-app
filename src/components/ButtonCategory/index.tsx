import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonCategoryProps {
  nameCategory: string;
  iconCategory: string;
}

function ButtonCategory() {
  const CategoryScreen = () => {
    console.log('Cachorro');
  };

  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          CategoryScreen();
        }}>
        <MaterialCommunityIcons size={50} name="rabbit" color={'#FFD166'} />
        {/* rabbit = roedores, dogs, cats, birds, */}
      </TouchableOpacity>
      <Text style={styles.textButton}>Cachorro</Text>
    </View>
  );
}

export default ButtonCategory;
