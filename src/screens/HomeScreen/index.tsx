import {View, ScrollView, SafeAreaView, Text, StatusBar} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import styles from './styles';
import theme from '../../global/styles/theme';
import {RootStackParamList} from '../../routes/types';
import ButtonCategory from '../../components/ButtonCategory';
import PetCard from '../../components/PetCard';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

function HomeScreen(props: HomeScreenProps) {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.TESTE}
        />
        <View style={{flex: 1, marginTop: 120}}>
          <Text style={styles.titleCategory}>Categorias</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
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
            <PetCard pet={{}} />
            <PetCard pet={{}} />
            <PetCard pet={{}} />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;
