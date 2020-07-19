/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import AppStack from './navigation';
import JPush from 'jpush-react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import {StatusBar, Platform} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

export default () => {
  useEffect(() => {
    JPush.init();
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
