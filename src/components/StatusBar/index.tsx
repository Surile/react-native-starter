import React from 'react';
import {StatusBar, StatusBarProps} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export default (props: StatusBarProps) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
};
