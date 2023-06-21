import { Dimensions, View, Text, image, Image } from 'react-native'
import React from 'react'
import Coin from '../../../assets/Data/crypto.json'
import { styles } from './Styles'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CoinHeader from '../../Components/CoinHeader2';
import { ChartDot, ChartPath, ChartPathProvider, } from '@rainbow-me/animated-charts';



export default function TradeScreen() {

    const {
        image: { small },
        name,
        prices,
        market_data: { market_cap_rank, current_price, price_change_percentage_24h },
        symbol,

    } = Coin
    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'

    const screenWidth = Dimensions.get("window").width;


    return (
        <View style={{ paddingHorizontal: 10, }}>
            <ChartPathProvider data={{ points: prices.map((price) => ({x: price[0], y: price[1] })), smoothingStrategy: 'bezier' }}>
                <CoinHeader
                    image={small}
                    name={name}
                    symbol={symbol}
                    marketCapRank={market_cap_rank}
                />
                <View style={styles.priceContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.CurrentPrice}>${current_price.usd}</Text>
                    </View>
                    <View style={{
                        backgroundColor: percentageColor,
                        paddingVertical: 8,
                        paddingHorizontal: 3,
                        borderRadius: 5,
                        padding: 5,
                        flexDirection: 'row',
                    }}>
                        <AntDesign
                            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
                            size={13}
                            color={'white'}
                            style={{ alignSelf: "center", marginRight: 5, }} />
                        <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(2)}% </Text>
                    </View>
                </View>
                <ChartPath height={screenWidth / 2} stroke="yellow" width={screenWidth} />
                <ChartDot style={{ backgroundColor: 'blue' }} />
            </ChartPathProvider>



        </View>
    )
}