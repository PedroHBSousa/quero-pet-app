import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TextInputProps, 
  ViewStyle,
  TextStyle
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

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

const InputPassword: React.FC<InputProps> = ({ 
  label, 
  error,
  style,
  containerStyle,
  ...rest 
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={{ position: "relative" }}>
        <TextInput
          placeholderTextColor={theme.colors.PLACEHOLDER}
          secureTextEntry={!isShowPassword}
          style={[
            styles.input,
            style ? style : {},
            error ? styles.inputError : {}
          ]} 
          {...rest} 
        />

        <Feather 
          size={22}
          color={'#969CB2'}
          name={isShowPassword ? 'eye' : 'eye-off'} 
          style={styles.icon}
          onPress={() => {
            setIsShowPassword(!isShowPassword)
          }}
        />
        
      </View>

      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
}

export default InputPassword;