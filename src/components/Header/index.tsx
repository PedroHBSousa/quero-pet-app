import React, {FunctionComponent} from 'react';
import {View, Text, ViewStyle, TouchableOpacity, TextStyle} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import styles from './styles';
import theme from '../../global/styles/theme';

interface HeaderProps {
  title?: string | null;
  isDisabledBack?: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  customStyles?: ViewStyle;
  buttonStyles?: ViewStyle;
  iconColor?: string;
  customText?: TextStyle;
}

const Header: FunctionComponent<HeaderProps> = ({
  title = null,
  isDisabledBack = false,
  backgroundColor = 'transparent',
  customStyles = {},
  buttonStyles = {},
  customText = {},
  iconColor = theme.colors.TEXT,
  onPress,
}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={[styles.container, {backgroundColor}, customStyles]}>
      {title && <Text style={[styles.title, customText]}>{title}</Text>}

      {!isDisabledBack && (
        <TouchableOpacity
          style={[styles.button, buttonStyles]}
          onPress={() => {
            onPress ? onPress() : navigation.goBack();
          }}>
          <MaterialIcons
            name="keyboard-backspace"
            size={30}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
