import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { UMAnalyticsModule } from '@utils/NativeModules'

export default class UserCenter extends Component {
  componentWillMount() {
    console.log('aaa componentWillMount')
  }
  componentWillUnmount() {
    console.log('aaa componentWillUnmount')
  }
  profileSignInWithPUID() {
    UMAnalyticsModule.profileSignInWithPUID('myname')
  }
  profileSignInWithPUIDWithProvider() {
    UMAnalyticsModule.profileSignInWithPUIDWithProvider('weixin', '18829283888')
  }
  profileSignOff() {
    UMAnalyticsModule.profileSignOff()
  }

  onPageStart() {
    UMAnalyticsModule.onPageStart('MainPage')
  }
  onPageEnd() {
    UMAnalyticsModule.onPageEnd('MainPage')
  }
  onEvent() {
    UMAnalyticsModule.onEvent('event0')
  }
  onEventWithLable() {
    UMAnalyticsModule.onEventWithLable('event1', 'label')
  }
  onEventWithMap() {
    UMAnalyticsModule.onEventWithMap('event2', { name: 'umeng', sex: 'man' })
  }
  onEventWithMapAndCount() {
    UMAnalyticsModule.onEventWithMapAndCount(
      'event3',
      { name: 'umeng', sex: 'man' },
      100,
    )
  }

  onEventObject() {
    UMAnalyticsModule.onEventObject('event4', { name: 'umeng', sex: 'man' })
  }
  registerPreProperties() {
    UMAnalyticsModule.registerPreProperties({ name: 'umeng', sex: 'man' })
  }
  unregisterPreProperty() {
    UMAnalyticsModule.unregisterPreProperty('name')
  }

  getPreProperties() {
    UMAnalyticsModule.getPreProperties((result: any) => {
      console.log(result)
      //Alert窗口仅测试用，可删除
      Alert.alert(
        'getPreProperties返回值',
        result,
        [{ text: '确定', onPress: () => console.log('Ask me later pressed') }],
        { cancelable: false },
      )
    })
  }
  clearPreProperties() {
    UMAnalyticsModule.clearPreProperties()
  }
  setFirstLaunchEvent() {
    UMAnalyticsModule.setFirstLaunchEvent(['111', '222', '333'])
  }

  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.u_c}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.profileSignInWithPUID.bind(this)}>
            <Text style={styles.u_c_text}>{'用户登录'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.profileSignOff.bind(this)}>
            <Text style={styles.u_c_text}>{'用户登出'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.onEvent.bind(this)}>
            <Text style={styles.u_c_text}>{'普通事件'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.onEventWithMap.bind(this)}>
            <Text style={styles.u_c_text}>{'多属性事件'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.u_c_item}
          onPress={this.onEventObject.bind(this)}>
          <Text style={styles.u_c_text}>{'onEventObject'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.u_c_item}
          onPress={this.onEventWithMapAndCount.bind(this)}>
          <Text style={styles.u_c_text}>{'数值性统计'}</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.registerPreProperties.bind(this)}>
            <Text style={styles.u_c_text}>{'设置超级属性'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.unregisterPreProperty.bind(this)}>
            <Text style={styles.u_c_text}>{'删除超级属性'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.getPreProperties.bind(this)}>
            <Text style={styles.u_c_text}>{'获取超级属性'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.u_c_item}
            onPress={this.clearPreProperties.bind(this)}>
            <Text style={styles.u_c_text}>{'清除超级属性'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.u_c_item}
          onPress={this.setFirstLaunchEvent.bind(this)}>
          <Text style={styles.u_c_text}>{'关注首次触发事件'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  u_c: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  u_c_item: {
    margin: 10,
    elevation: 10,

    borderWidth: 1.5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  u_c_text: {
    fontSize: 24,
  },
})
