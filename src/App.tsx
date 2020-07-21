/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import {StatusBar, Platform, NativeModules} from 'react-native';
import {Provider} from 'react-redux';
import {UMPushModule} from '@utils/NativeModules';
import AppStack from './navigation';
import store from './store';
const Upush = NativeModules.UMPushModule;

export default () => {
  useEffect(() => {
    Upush.appInfo((res: any) => console.log(res));
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <RootSiblingParent>
        <AppStack />
      </RootSiblingParent>
    </Provider>
  );
};
