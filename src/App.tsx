/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import store from './store'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import AppStack from './navigation'
import { Provider } from 'react-redux'
import JPush from 'jpush-react-native'
import { NativeBaseProvider, theme } from 'native-base'

export default () => {
  useEffect(() => {
    // JPush.setLoggerEnable(true);
    JPush.init()

    JPush.getRegistrationID((result) =>
      console.log('registerID:' + JSON.stringify(result))
    )
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <AppStack />
      </Provider>
    </NativeBaseProvider>
  )
}
