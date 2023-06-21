import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../Screens/Dashboard/Dashboard'
import Profile from '../Screens/Profile/Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wallet from '../Screens/Wallet/Wallet'
import Home from "@expo/vector-icons/Ionicons"
import Purse from "@expo/vector-icons/SimpleLineIcons"
import Xchange from "@expo/vector-icons/FontAwesome"
import CreditCard from "@expo/vector-icons/EvilIcons"
import Person from "@expo/vector-icons/Ionicons";
import Trade from '../Screens/Trade/Trade'
import Cards from '../Screens/Card/Cards'

Stack = createNativeStackNavigator();
Tab = createBottomTabNavigator();
const SIZE = 28

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
function TradeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Trade3"
                component={Trade}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Dashboard3"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Wallet3"
                component={Wallet}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile3"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )

}
// function CardScreen() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Dashboard1"
//                 component={Dashboard}
//                 options= {{headershown: false}}

//             />
//             <Stack.Screen />
//         </Stack.Navigator>
//     )
// }
function ProfileScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile4"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dashboard4"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Wallet4"
                component={Wallet}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Trade4"
                component={Trade}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Card4"
                component={Cards}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
function CardScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Card12"
                component={Cards}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dashboard12"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Wallet12"
                component={Wallet}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Trade12"
                component={Trade}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Profile12"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default function BottomTabNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBaractiveTintColor: "blue",
                tabBarInactiveTintColor: 'black',

                tabBarStyle: {
                    // backgroundColor: "white",
                    // borderRadius: ,
                    height: 70,

                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    marginBottom: 12
                }

            }}

        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Home name="home"
                            color={focused ? "blue" : "black"}
                            size={SIZE}
                        />
                    )

                }}
            />
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Purse name="wallet"
                            color={focused ? "blue" : "black"}
                            size={SIZE}
                        />
                    )

                }}

            />
            <Tab.Screen
                name="Trade"
                component={TradeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Xchange name="exchange"
                            color={focused ? "blue" : `#808080`}
                            size={SIZE}
                        />
                    )

                }}

            />
            <Tab.Screen
                name="Cards"
                component={CardScreen}
                options={{
                    headershown: false,
                    tabBarIcon: ({ focused }) => (
                        <CreditCard name="credit-card"
                            color={focused ? "blue" : `#808080`}
                            size={SIZE}
                        />
                    )

                }}

            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Person name="person"
                            color={focused ? "blue" : "black"}
                            size={SIZE}
                        />
                    )

                }}

            />
        </Tab.Navigator>
    )
}