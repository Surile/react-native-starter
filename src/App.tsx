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
import { RootSiblingParent } from 'react-native-root-siblings';

export default () => {
  useEffect(() => {
    JPush.init()
  }, [])


  return (
    <RootSiblingParent>
      <AppStack />
    </RootSiblingParent>
  );
};


