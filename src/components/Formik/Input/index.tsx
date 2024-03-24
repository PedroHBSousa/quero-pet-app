import React from 'react';
import {View, Text, TextInput, TextInputProps, ViewStyle} from 'react-native';

import styles from './styles';
import theme from '../../../global/styles/theme';

interface InputProps extends TextInputProps {
  error?: string;
  label?: string;
  containerStyle?: ViewStyle;
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
        editable={editable}
        style={[
          styles.input,
          style ? style : {},
          error ? styles.inputError : {},
          editable === false ? {} : {},
        ]}
        {...rest}
      />

      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

export default Input;
