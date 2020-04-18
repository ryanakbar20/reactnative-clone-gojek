import React from 'react';
import style from '../style.js';
import {View, Image, Text} from 'react-native';

const GojekFeaturesButton = (props) => {
    return(
            <View style={style.gojekFeaturesButton}>
                <Image style={style.gojekFeaturesButtonImage}
                       source={props.img}/>
                <Text style={style.gojekFeaturesButtonText}>{props.text}</Text>
            </View>
    )
}

export default GojekFeaturesButton;