import React from 'react';
import style from '../style.js';
import {View, Image, Text} from 'react-native';

const GopayFeaturesButton = (props) => {
    return (
        <View style={style.gopayFeaturesButton}>
                <Image style={style.gopayFeaturesButtonImage} source={props.img} />
                <Text style={style.gopayFeaturesButtonText}>{props.text}</Text>
        </View>
    )
}

export default GopayFeaturesButton;