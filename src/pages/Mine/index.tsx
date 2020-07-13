import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

export default () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <View>
                <Text>个人中心</Text>
            </View>
        </SafeAreaView>
    )
}