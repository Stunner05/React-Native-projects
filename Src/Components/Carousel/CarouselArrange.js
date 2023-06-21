import { View, Text, StyleSheet, Pressable, SafeAreaView, Image} from 'react-native'
import React from 'react'
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes'
import { styles } from './Style'

export default function CarouselArrange({item}) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.slides}>
                <Image source={{uri: item.image}} style={styles.image}/>
                <Text styles={styles.text}>{item.title}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

