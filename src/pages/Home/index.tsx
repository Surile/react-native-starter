import React, { useState } from 'react'
import { Box, Button, Text } from 'native-base'
import { UMShareModule } from '@utils/NativeModules'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation'

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>

export default ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const [message, setMessage] = useState(null)
  const data = {
    tag: 'Tags/Alias/Excusive Alias',
    type: 'Alias Type',
    result: '结果',
  }

  const sinashare = () => {
    UMShareModule.share(
      'sssss',
      'https://static.dev.morecycle.net//static/images/app/recycle.jpg',
      'http://www.baidu.com/',
      'title',
      1,
      (code: any, message: any) => {
        setMessage(message)
      },
    )
  }
  const qqshare = () => {
    UMShareModule.share(
      'sssss',
      'https://static.dev.morecycle.net//static/images/app/recycle.jpg',
      'http://www.umeng.com/',
      'title',
      0,
      (code: any, message: any) => {
        setMessage(message)
      },
    )
  }
  const wxshare = () => {
    UMShareModule.share(
      'sssss',
      'https://static.dev.morecycle.net//static/images/app/recycle.jpg',
      'http://www.umeng.com/',
      'title',
      2,
      (code: any, message: any) => {
        setMessage(message)
      },
    )
  }

  const qqauth = () => {
    UMShareModule.auth(0, (code: any, result: any, message: any) => {
      setMessage(message)
      if (code == 200) {
        setMessage(result.uid)
      }
    })
  }
  const sinaauth = () => {
    UMShareModule.auth(1, (code: any, result: any, message: any) => {
      setMessage(message)
      if (code == 200) {
        setMessage(result.uid)
      }
    })
  }
  const wxauth = () => {
    UMShareModule.auth(2, (code: any, result: any, message: any) => {
      setMessage(message)
      if (code == 200) {
        setMessage(result.uid)
      }
    })
  }

  return (
    <Box p="12" rounded="lg">
      <Text fontSize="xs">{message}</Text>
      <Text fontSize="xs">{data.result}</Text>
      <Button.Group>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>
      <Button
        onPress={() => {
          navigation.push('Detail')
        }}
        mt={2}
        colorScheme="primary">
        跳转到详情
      </Button>
      <Button
        onPress={() => {
          navigation.push('EditTextScreen')
        }}
        mt={2}
        colorScheme="primary">
        跳转到编辑
      </Button>
      <Button onPress={() => sinashare()} mt={2} colorScheme="primary">
        微博分享
      </Button>
      <Button onPress={() => qqshare()} mt={2} colorScheme="primary">
        QQ分享
      </Button>
      <Button onPress={() => wxshare()} mt={2} colorScheme="primary">
        微信分享
      </Button>
      <Button onPress={() => sinaauth()} mt={2} colorScheme="primary">
        微博登录
      </Button>
      <Button onPress={() => qqauth()} mt={2} colorScheme="primary">
        QQ登录
      </Button>
      <Button onPress={() => wxauth()} mt={2} colorScheme="primary">
        微信登录
      </Button>
    </Box>
  )
}
