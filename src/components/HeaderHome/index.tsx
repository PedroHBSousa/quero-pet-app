import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';

const profileImage = require('../../components/HeaderHome/teste.png');

const HeaderHome: React.FC = () => {
  const {user} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.nameProfile}>
        Olá, {user?.information.first_name}
      </Text>
      <Image source={profileImage} style={styles.profileImage} />
    </View>
  );
};
export default HeaderHome;
