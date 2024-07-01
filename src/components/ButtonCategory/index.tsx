import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CategoryType} from '../../interfaces';

interface ButtonCategoryProps {
  category: CategoryType;
  active: boolean;
  onPress: () => void;
}

function ButtonCategory(props: ButtonCategoryProps) {
  const {category, onPress, active} = props;
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress();
        }}>
        <MaterialCommunityIcons
          size={50}
          name={category.icon}
          color={active ? '#FFD166' : '#ffffff'}
        />
      </TouchableOpacity>
      <Text style={styles.textButton}>{category.name}</Text>
    </View>
  );
}

export default ButtonCategory;
