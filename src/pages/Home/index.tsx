import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button, Text, Card, CardItem} from 'native-base';
import {UMShareModule, UMPushModule} from '@utils/NativeModules';
import StatusBar from '@components/StatusBar';
import tools from 'utils/tools';

export default ({navigation}: any) => {
  const [message, setMessage] = useState(null);
  const [data, setData] = useState({
    tag: 'Tags/Alias/Excusive Alias',
    type: 'Alias Type',
    result: '结果',
  });

  const sinashare = () => {
    UMShareModule.share(
      'sssss',
      'https://static.dev.morecycle.net//static/images/app/recycle.jpg',
      'http://www.baidu.com/',
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
      'https://static.dev.morecycle.net//static/images/app/recycle.jpg',
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
      'https://static.dev.morecycle.net//static/images/app/recycle.jpg',
      'http://www.umeng.com/',
      'title',
      2,
      (code: any, message: any) => {
        setMessage(message);
      },
    );
  };

  const qqauth = () => {
    UMShareModule.auth(0, (code: any, result: any, message: any) => {
      setMessage(message);
      if (code == 200) {
        setMessage(result.uid);
      }
    });
  };
  const sinaauth = () => {
    UMShareModule.auth(1, (code: any, result: any, message: any) => {
      setMessage(message);
      if (code == 200) {
        setMessage(result.uid);
      }
    });
  };
  const wxauth = () => {
    UMShareModule.auth(2, (code: any, result: any, message: any) => {
      setMessage(message);
      if (code == 200) {
        setMessage(result.uid);
      }
    });
  };

  const addTag = () => {
    UMPushModule.addTag(data, (code: number, remain: string) => {
      console.log('code', code);
      console.log('re', remain);
      if (code === 200) {
        console.log('re', remain);
      }
    });
  };

  return (
    <SafeAreaView>
      <Card>
        <CardItem>
          <Text>{message}</Text>
        </CardItem>
      </Card>
      <Button style={styles.u_c_item} onPress={() => navigation.push('detail')}>
        <Text>跳转到详情</Text>
      </Button>

      <Button
        style={styles.u_c_item}
        onPress={() => navigation.push('editTextScreen')}>
        <Text>跳转到编辑</Text>
      </Button>

      <Button style={styles.u_c_item} onPress={sinashare}>
        <Text>微博分享</Text>
      </Button>

      <Button style={styles.u_c_item} onPress={qqshare}>
        <Text>QQ分享</Text>
      </Button>

      <Button style={styles.u_c_item} onPress={wxshare}>
        <Text>微信分享</Text>
      </Button>

      <Button warning style={styles.u_c_item} onPress={sinaauth}>
        <Text>微博登录</Text>
      </Button>

      <Button warning style={styles.u_c_item} onPress={qqauth}>
        <Text>QQ登录</Text>
      </Button>

      <Button warning style={styles.u_c_item} onPress={wxauth}>
        <Text>微信登录</Text>
      </Button>

      <Button success style={styles.u_c_item} onPress={tools.alert}>
        <Text>Roott</Text>
      </Button>
      <Button primary style={styles.u_c_item} onPress={addTag}>
        <Text>ADD TAGS</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  u_c_item: {
    margin: 10,
  },
});
