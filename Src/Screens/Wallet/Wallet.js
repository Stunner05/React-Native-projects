import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import CoinItem from '../../Components/CoinItem';
import cryptocurrencies from '../../../assets/Data/cryptocurrencies.json';
import { styles } from './Style';

export default function Wallet() {
    return (
        <View>
            <Text>Your Assets</Text>
            <FlatList 
            data={cryptocurrencies} 
            renderItem = {({item}) => <CoinItem marketCoin={item}/>}
            />
        </View>
    )
}