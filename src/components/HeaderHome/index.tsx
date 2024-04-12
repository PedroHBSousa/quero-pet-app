import { View, Text, ViewStyle, StyleProp} from 'react-native';
import styles from './styles';

interface ExtendedViewStyle extends ViewStyle {
    shadowColor?: string;
    backgroundColor?: string; // Adicionando propriedade backgroundColor
    borderBottomWidth?: number; // Adicionando propriedade borderBottomWidth
    borderBottomColor?: string; // Adicionando propriedade borderBottomColor
  }

interface HeaderHomeProps {
    name: string;
    headerStyle?: StyleProp<ExtendedViewStyle>;
}

const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    return(
        <View style={props.headerStyle} >
            <Text style={{color: "#000"}}>{props.name}</Text>
        </View>
    )
}
export default HeaderHome;