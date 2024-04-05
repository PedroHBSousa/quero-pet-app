import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import theme from '../../global/styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../../routes/types/navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type HomeScreenProp = { navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'> };

function HomeScreen({ navigation }: HomeScreenProp) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={{ padding: 25, flex: 1 }}>
                    <Text style={styles.titleCategory}>Categorias</Text>

                    <View>
                        
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.rowItens} >

                        <TouchableOpacity
                            style={styles.button}
                        // onPress={() => handleNavigationscreen('PixScreen')}>
                        >
                            <MaterialCommunityIcons size={24} name="dog-side" color={theme.colors.TESTE} />
                            <Text style={styles.textButton}>Cachorro</Text>
                        </TouchableOpacity>

                    </ScrollView>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default HomeScreen;
