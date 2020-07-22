import React, {useState} from 'react';
import {Text, Button} from 'native-base';
import {UMShareModule} from '@utils/NativeModules';
import {SafeAreaView, StyleSheet} from 'react-native';

export default () => {
  const [message, setMessage] = useState('结果');
  const sinashare = () => {
    // alert('ok');
    UMShareModule.share(
      'sssss',
      'http://dev.umeng.com/images/tab2_1.png',
      'http://www.umeng.com/',
      'title',
      1,
      (code: any, message: any) => {
        setMessage(message);
      },
    );
  };
  const qqshare = () => {
    UMShareModule.share(
      'sssss',
      'http://dev.umeng.com/images/tab2_1.png',
      'http://www.umeng.com/',
      'title',
      0,
      (code: any, message: any) => {
        setMessage(message);
      },
    );
  };
  const wxshare = () => {
    UMShareModule.share(
      'sssss',
      'http://dev.umeng.com/images/tab2_1.png',
      'http://www.umeng.com/',
      'title',
      2,
      (code: any, message: any) => {
        setMessage(message);
      },
    );
  };
  const shareboard = () => {
    var list = [0, 1, 2];
    UMShareModule.shareboard(
      'sssss',
      'http://dev.umeng.com/images/tab2_1.png',
      'http://www.umeng.com/',
      'title',
      list,
      (code: any, message: any) => {
        setMessage(message);
      },
    );
  };
  return (
    <SafeAreaView>
      <Text>{message}</Text>
      <Button success style={styles.u_c_item} onPress={sinashare}>
        <Text>新浪分享</Text>
      </Button>
      <Button success style={styles.u_c_item} onPress={wxshare}>
        <Text>微信分享</Text>
      </Button>
      <Button success style={styles.u_c_item} onPress={qqshare}>
        <Text>QQ分享</Text>
      </Button>
      <Button success style={styles.u_c_item} onPress={shareboard}>
        <Text>分享面板</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  u_c_item: {
    margin: 10,
  },
});
