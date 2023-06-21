import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import { AntDesign } from '@expo/vector-icons';


export default function CoinItem({ marketCoin }) {
    const {
        name,
        current_price,
        market_cap,
        market_cap_rank,
        price_change_percentage_24h,
        symbol,
        image,
    } = marketCoin;

    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'

    const normalizeMarketCap = () => {
        if ( market_cap > 1_000_000_000_000 ) {
            return `${Math.floor(market_cap / 1_000_000_000_000)} T`
        } if (market_cap > 1_000_000_000) {
            return `${Math.floor(market_cap / 1_000_000_000)} B`
        } if (market_cap > 1_000_000) {
            return `${Math.floor(market_cap / 1_000_000)} M`
        }
        if (market_cap > 1_000) {
            return `${Math.floor(market_cap / 1_000)} k`
        }
        return market_cap
    }

    
    return (
    
        // console.log(marketCoin)
        < View >
        <View style={styles.coinContainer}>
            <Image
                source={{ uri: image }}
                style={{
                    height: 50,
                    width: 50,
                    marginRight: 10,
                    alignSelf: "center"
                }}
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>{market_cap_rank}</Text>
                    </View>
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <AntDesign
                            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
                        size={13}
                        color= {percentageColor}
                        style={{ alignSelf: "center", marginRight: 5, }} />
                        <Text style={{color: percentageColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
                </View> 
            </View>
            <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                <Text style={styles.title}>{current_price.toFixed(2)}</Text>
                <Text style={{color: 'black'}}>Mcap {normalizeMarketCap(market_cap)}</Text>
            </View>
        </View>
        </View >
    )
}