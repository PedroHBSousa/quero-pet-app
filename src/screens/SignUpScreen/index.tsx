import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import theme from "../../global/styles/theme";
import Input from "../../components/Formik/Input";
import Header from "../../components/Header";


function SignUpScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />

                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={theme.colors.BACKGROUND}
                />

                <View style={styles.main}>
                    <View>
                        <Text style={styles.titleXl}>Cadastre-se para começar.</Text>
                        <Text style={[styles.text, { marginBottom: 45 }]}>Cada cadastro é uma nova oportunidade de mudar uma vida.</Text>

                        <Input
                            label={'Nome completo'}
                            placeholder={'Digite seu nome'}
                            containerStyle={{ marginTop: 0 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default SignUpScreen;