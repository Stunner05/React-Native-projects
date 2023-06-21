import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Settings from "@expo/vector-icons/Ionicons"
import SearchIcon from "@expo/vector-icons/Ionicons"

export default function Header() {
    const SIZE = 30
    return (
        <View style={styles.body}>
            <Pressable>
                <Settings size={SIZE} name= "md-settings" />
            </Pressable>
            <Pressable>
                < SearchIcon size={SIZE} color= "black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: 100,

    }
})