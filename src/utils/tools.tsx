import React from 'react'
import { TouchableOpacity, View, Text, PixelRatio } from 'react-native'
import RootSiblings from 'react-native-root-siblings';

const alerAlert = (title: string, content: string, ok: Function) => { };

const minLineHeight = () => {
  return 1 / PixelRatio.get()
}


const alert = () => {
  const sibling = new RootSiblings(
    (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => sibling && sibling.destroy()}
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            justifyContent: 'center',
          },
        ]}>
        <View
          style={{
            marginHorizontal: 30,
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 12,
          }}>
          <View>

            <Text>            12312321312
            213123123213

            21
            312312312</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
              <Text>取消</Text>
            </TouchableOpacity>
            <View
              style={{
                width: minLineHeight(),
                height: 20,
                backgroundColor: '#666',
              }}
            />
            <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
              <Text>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    ),
  );
};

export default {
  alert
}