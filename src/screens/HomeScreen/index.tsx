import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import theme from '../../global/styles/theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../routes/types/navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCategory from '../../components/ButtonCategory';

type HomeScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

function HomeScreen({navigation}: HomeScreenProp) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Text style={styles.titleCategory}>Categorias</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.containerScrollView}
            contentContainerStyle={styles.contentContainerScrollView}>
            <ButtonCategory />
            <ButtonCategory />
            <ButtonCategory />
            <ButtonCategory />
            <ButtonCategory />
            <ButtonCategory />
            <ButtonCategory />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;
