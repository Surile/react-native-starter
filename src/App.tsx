/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import {StatusBar} from 'react-native';
import JPush from 'jpush-react-native';
import {Provider} from 'react-redux';
import AppStack from './navigation';
import store from './store';

export default () => {
  useEffect(() => {
    // JPush.setLoggerEnable(true);

    JPush.init();

    JPush.getRegistrationID((result) =>
      console.log('registerID:' + JSON.stringify(result)),
    );
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
