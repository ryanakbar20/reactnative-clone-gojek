import React from 'react';
import {View, Image} from 'react-native';
import style from '../style.js';

const Banner = (props) => {
    return (
        <View>
            <View>
                <View style={style.banner}>
                    <Image style={style.bannerImg} source={props.img} />
                </View>
                <View style={style.lineKontenMenu}/>
            </View>
        </View>
    )
}

export default Banner;