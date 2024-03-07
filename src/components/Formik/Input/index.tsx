import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TextInputProps, 
  ViewStyle, 
  TextStyle
} from 'react-native';

import styles from './styles';
import theme from '../../../global/styles/theme';

interface InputProps {
    label?: string;
    error?: string;
    style?: TextStyle;
    containerStyle?: ViewStyle;
    editable?: boolean;
    [key: string]: any; // Allow any other props
  }

const Input: React.FC<InputProps> = ({ 
  label, 
  error,
  style,
  containerStyle,
  editable = true,
  ...rest 
}) => {
  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        placeholderTextColor={theme.colors.PLACEHOLDER}
        style={[
          styles.input,
          style ? style : {},
          error ? styles.inputError : {},
        ]}
        {...rest} 
      />

      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
}

export default Input;