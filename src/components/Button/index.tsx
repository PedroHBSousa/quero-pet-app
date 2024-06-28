import React from 'react';
import {Text, ActivityIndicator, TextStyle, ViewStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import theme from '../../global/styles/theme';

interface InputProps {
  title?: string;
  isLoading?: boolean;
  color?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  [key: string]: any; // Allow any other props
}

const Button: React.FC<InputProps> = ({
  title,
  isLoading = false,
  color = theme.colors.TESTE,
  titleStyle,
  style,
  ...rest
}) => {
  return (
    <RectButton
      style={[styles.button, style || {}, {backgroundColor: color}]}
      {...rest}>
      {!isLoading ? (
        <Text style={[styles.title, titleStyle || {}]}>{title}</Text>
      ) : (
        <ActivityIndicator color={theme.colors.SHAPE} />
      )}
    </RectButton>
  );
};

export default Button;
