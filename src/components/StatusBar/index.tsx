import React from 'react';
import { StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import theme from '../../global/styles/theme';

const StatusBarComponent = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('#FFFF');
      StatusBar.setBarStyle('dark-content');
      return () => {
        StatusBar.setBackgroundColor(theme.colors.DANGER);
        StatusBar.setBarStyle('light-content');
      };
    }, [])
  );
};

export default StatusBarComponent;
