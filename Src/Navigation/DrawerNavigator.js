import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './BottomTabNav'


export default function DrawerNavigator() {

    Stack = createNativeStackNavigator();
    Drawer = createDrawerNavigator();

    function HomeScreen() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Dashboard1"
                    component={Dashboard}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Wallet1"
                    component={Wallet}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Trade1"
                    component={Trade}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Card1"
                    component={Cards}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Profile1"
                    component={Profile}
                    options={{ headerShown: false }}

                />

            </Stack.Navigator>
        )

    }
    function WalletScreen() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Wallet2"
                    component={Wallet}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Dashboard2"
                    component={Dashboard}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Trade2"
                    component={Trade}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Card23"
                    component={Cards}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Profile2"
                    component={Profile}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

    return (
        <DrawerNavigator>
            <Drawer.screen name="" component={BottomTabNav}
            />
            <Drawer.screen />
        </DrawerNavigator>
    )
}