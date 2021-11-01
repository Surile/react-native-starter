import React, { useState } from 'react'
import { Box, Button, Text } from 'native-base'
import { UMShareModule, UMPushModule } from '@utils/NativeModules'

export default ({ navigation }: any) => {
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
      }
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
      }
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
      }
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

  const addTag = () => {
    UMPushModule.addTag(data, (code: number, remain: string) => {
      console.log('code', code)
      console.log('re', remain)
      if (code === 200) {
        console.log('re', remain)
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
      <Button mt={2} colorScheme="primary">
        跳转到详情
      </Button>
      <Button mt={2} colorScheme="primary">
        跳转到编辑
      </Button>
      <Button mt={2} colorScheme="primary">
        微博分享
      </Button>
      <Button mt={2} colorScheme="primary">
        QQ分享
      </Button>
      <Button mt={2} colorScheme="primary">
        微信分享
      </Button>
      <Button mt={2} colorScheme="primary">
        微博登录
      </Button>
      <Button mt={2} colorScheme="primary">
        QQ登录
      </Button>
      <Button mt={2} colorScheme="primary">
        微信登录
      </Button>
      <Button mt={2} colorScheme="primary">
        Roott
      </Button>
      <Button mt={2} colorScheme="primary">
        ADD TAGS
      </Button>
    </Box>
  )
}
