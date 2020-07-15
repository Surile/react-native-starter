import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import StatusBar from '@components/StatusBar'

export default () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <StatusBar translucent={true} barStyle="dark-content" backgroundColor="#ffffff" />

            <View>
                <Text>个人中心</Text>
            </View>
        </SafeAreaView>
    )
}