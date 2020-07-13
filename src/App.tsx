/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useEffect } from 'react';
import AppStack from './navigation'
import JPush from 'jpush-react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default () => {

  useEffect(() => {
    JPush.init()
  }, [])


  return (
    <AppStack />
  );
};


