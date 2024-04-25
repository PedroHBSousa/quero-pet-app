import { View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

interface HeaderHomeProps {
    name: string;
}

const profileImage = require("../../components/HeaderHome/teste.png");

const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    return(
        <View style={styles.container} >
            <Text style={styles.nameProfile}>Olá, {props.name}</Text>
            <Image source={profileImage} style={styles.profileImage}/>
        </View>
    )

}
export default HeaderHome;