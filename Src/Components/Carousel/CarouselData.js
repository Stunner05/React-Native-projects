import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import CarouselArrange from './CarouselArrange'
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel'
import { data } from './Data'

const SLIDERWIDTH = 500
const ITEMWIDTH = 350

export default function CarouselData() {
    
    const isCarousel= React.useRef(null)
    return (
        <SafeAreaView>
            <Carousel
                layout = "default"
                ref = {isCarousel}
                data = {data}
                renderItem ={CarouselArrange}
                useScrollView={true}
                hasParallaxImages={true}
                sliderWidth = {SLIDERWIDTH}
                itemWidth = {ITEMWIDTH}
            />
        </SafeAreaView>
    )
}