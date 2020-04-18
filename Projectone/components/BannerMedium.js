import React from 'react';
import {View, Image} from 'react-native';
import style from '../style.js';

const BannerMedium = (props) => {
    return (
        <View>
            <View style={style.bannerMedium}>
                <Image style={style.bannerMediumImg} source={props.img} />
            </View>
        </View>
    )
}

export default BannerMedium;