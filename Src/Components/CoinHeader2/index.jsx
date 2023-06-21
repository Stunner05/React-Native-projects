import React from "react";
import { View, Text, image, Image } from 'react-native'
// import Coin from '../../../assets/Data/crypto.json'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { styles } from "./Style";


export default function CoinHeader(props) {
    const { image, symbol, market_cap_rank } = props
    return (
        <View style={styles.headerContainer}>
            <Ionicons
                name="chevron-back-sharp"
                size={24}
                color="black"
            />
            <View style={styles.tickerContainer}>
                <Image source={{ uri: image }} style={{ width: 20, height: 25 }} />
                <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
                <View style={styles.rankContainer}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, }}>#{market_cap_rank}</Text>
                </View>
            </View>
            <EvilIcons
                name="user"
                size={24}
                color="black"
            />
        </View>
    )
}
