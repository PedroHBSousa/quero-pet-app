import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import styles from './styles';
import theme from '../../global/styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../../routes/types/navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCategory from '../../components/ButtonCategory';
import PetCard from '../../components/PetCard';

type HomeScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

function HomeScreen({ navigation }: HomeScreenProp) {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.TESTE}
      />
        <View style={{ flex: 1, marginTop: 120}}>
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
          </ScrollView>
          <Text style={styles.titleCategory}>Pets Carentes</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.containerScrollView}
            contentContainerStyle={styles.contentContainerScrollView}>

              <PetCard/>
              <PetCard/>
              <PetCard/>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;
