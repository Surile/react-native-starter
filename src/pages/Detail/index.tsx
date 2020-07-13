import React, { useRef, useEffect } from 'react'
import { View, Text } from 'react-native'
// import LottieView from 'lottie-react-native';


export default ({ navigation }: any) => {
    const lottie: any = useRef()


    useEffect(() => {
        console.log('lottie', lottie)
        // lottie.play();
        // Or set a specific startFrame and endFrame with:
        // lottie.play(30, 120);
    }, [])

    return (
        <View style={{
            flex: 1
        }}>
            <Text>详情</Text>
            {/* <LottieView ref={lottie} source={require('../../assets/images/home.json')} /> */}
        </View>
    )
}