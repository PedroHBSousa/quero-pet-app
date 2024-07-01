import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import styles from './styles';
import theme from '../../global/styles/theme';
import {RootStackParamList} from '../../routes/types';
import ButtonCategory from '../../components/ButtonCategory';
import PetCard from '../../components/PetCard';
import {PetContext} from '../../contexts/PetContext';
import {CategoryType, PetType} from '../../interfaces';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

function HomeScreen(props: HomeScreenProps) {
  const {categories, getCategories, getPets, getOrders} =
    useContext(PetContext);
  const [loading, setLoading] = useState(false);
  const [pets, setPets] = useState<PetType[]>([]);
  const [filteredPets, setFilteredPets] = useState<PetType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null,
  );

  const handleCategoryPress = (category: CategoryType) => {
    setSelectedCategory(category);
    const petsByCategory = pets.filter(pet => pet.category_id === category.id);
    setFilteredPets(petsByCategory);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await getCategories();
        await getOrders();
        const response = await getPets();
        setPets(response.data.data);
        setFilteredPets(response.data.data);
      } catch (error) {
        // ...
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!loading ? (
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
              {categories.map(category => (
                <ButtonCategory
                  key={category.id}
                  category={category}
                  active={selectedCategory?.id === category.id}
                  onPress={() => {
                    handleCategoryPress(category);
                  }}
                />
              ))}
            </ScrollView>
            <Text style={styles.titleCategory}>Pets Carentes</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.containerScrollView}
              contentContainerStyle={styles.contentContainerScrollView}>
              {filteredPets.map(pet => (
                <PetCard key={pet.name} pet={pet} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={theme.colors.TESTE} />
        </View>
      )}
    </SafeAreaView>
  );
}
export default HomeScreen;
