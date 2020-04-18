import React from 'react';
import {View, Image, Text} from 'react-native';
import style from '../style.js';

const BannerLarge = (props) => {
    return (
        <View>
            <View style={style.bannerLarge}>
                <Image style={style.bannerLargeImg} source={props.img} />
                <View style={style.bannerLargeText}>
                    <Text style={style.bannerLargeTitle}>Jaga kemurnian bumi dengan Ades</Text>
                    <Text style={style.bannerLargeSubtitle}>Kirim botol plastikmu dari mana saja lewat GoSend sekarang!</Text>
                </View>
            </View>
        </View>
    )
}

export default BannerLarge;