import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default ({ navigation }: any) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <TouchableOpacity onPress={() => navigation.push('detail')}>
                <Text>跳转到详情</Text>
            </TouchableOpacity>
        </View>
    )
}