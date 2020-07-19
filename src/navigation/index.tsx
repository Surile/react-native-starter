import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Detail from '@pages/Detail'
import Home from '@pages/Home'
import Mine from '@pages/Mine'
import EditTextScreen from '@pages/EditText'
import { StatusBar } from 'react-native'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator();

const BottomTabsScreen = () => (
    <BottomTab.Navigator>
        <Stack.Screen
            name="home"
            component={Home}
            options={{
                title: "首页"
            }}
        ></Stack.Screen>
        <Stack.Screen name="mine" component={Mine} options={{
            title: "个人中心"
        }}></Stack.Screen>
    </BottomTab.Navigator>
)



const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={{
                    headerTintColor: '#030303',
                    headerBackTitleVisible: false,
                    headerTitleAlign: "center",
                    cardStyle: {
                        flex: 1,
                        backgroundColor: '#f5f5f9',
                    },
                    headerStyle: {
                        borderBottomColor: '#ffffff',
                        backgroundColor: '#fff',
                        elevation: 0.5,
                    },
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <Stack.Screen
                    name="BottomTabScreen"
                    component={BottomTabsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    options={{
                        title: "详情"
                    }}
                    name="detail"
                    component={Detail}
                />
                <Stack.Screen options={{
                    title: "编辑"
                }} name="editTextScreen" component={EditTextScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppStack;