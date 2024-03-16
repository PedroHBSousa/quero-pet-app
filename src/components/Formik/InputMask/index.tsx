import React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import MaskInput, {MaskInputProps} from 'react-native-mask-input';
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

const InputMask: React.FC<InputProps> = ({
  label,
  error,
  style,
  containerStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <MaskInput
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
};

export default InputMask;
