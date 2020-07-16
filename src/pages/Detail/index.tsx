import React, { useRef, useEffect, useState } from 'react'
import { View, Text, Alert, TextInput } from 'react-native'
// import LottieView from 'lottie-react-native';
import StatusBar from '@components/StatusBar'


export default ({ navigation }: any) => {
    const lottie: any = useRef()


    const [text, setText] = useState('');
    const hasUnsavedChanges = Boolean(text);

    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e: any) => {
                if (!hasUnsavedChanges) {
                    // If we don't have unsaved changes, then we don't need to do anything
                    return;
                }

                console.log("111")

                // Prevent default behavior of leaving the screen
                e.preventDefault();

                // Prompt the user before leaving the screen
                Alert.alert(
                    'Discard changes?',
                    'You have unsaved changes. Are you sure to discard them and leave the screen?',
                    [
                        { text: "Don't leave", style: 'cancel', onPress: () => { } },
                        {
                            text: 'Discard',
                            style: 'destructive',
                            // If the user confirmed, then we dispatch the action we blocked earlier
                            // This will continue the action that had triggered the removal of the screen
                            onPress: () => navigation.dispatch(e.data.action),
                        },
                    ]
                );
            }),
        [navigation, hasUnsavedChanges]
    );

    return (
        <View style={{
            flex: 1
        }}>
            <StatusBar translucent={true} barStyle="dark-content" backgroundColor="#fff"></StatusBar>
            <Text>详情</Text>
            <TextInput
                value={text}
                placeholder="Type something…"
                onChangeText={setText}
            />
            {/* <LottieView ref={lottie} source={require('../../assets/images/home.json')} /> */}
        </View>
    )
}