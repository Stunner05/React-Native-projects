import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Style'
import Header from '../../Components/Header/Header'
import CarouselData from '../../Components/Carousel/CarouselData'


export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.welcometxt}>
                <Text>Welcome</Text>
                <Text>Peter James</Text>
            </View>
            <Text>TOTAL BALANCE</Text>
            <View>
                <Header />
            </View>
            <View>
                <CarouselData />
            </View>



            <Text>FAVORITES</Text>
            <Text>My Portfolio</Text>
            <Text>See all</Text>
        </View>
    )
}