import React from 'react';
import {View, Text, TextInput, TouchableOpacity, TextStyle} from 'react-native';

import styles from './styles';
import theme from '../../../global/styles/theme';

interface InputProps {
  label?: string;
  error?: string;
  style?: TextStyle;
  value?: string;
  editable?: boolean;
  formRef?: React.RefObject<any>;
  [key: string]: any; // Allow any other props
}

const Input: React.FC<InputProps> = ({
  formRef,
  label,
  error,
  style,
  value,
  editable = true,
  ...rest
}) => {
  function handleChange(value: string) {
    formRef?.current?.setFieldValue('sex', value);
  }

  return (
    <View style={style || {}}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.option, value == 'M' ? styles.optionActived : {}]}
          onPress={() => {
            handleChange('M');
          }}>
          <Text style={styles.optionText}>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, value == 'F' ? styles.optionActived : {}]}
          onPress={() => {
            handleChange('F');
          }}>
          <Text style={styles.optionText}>Feminino</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
