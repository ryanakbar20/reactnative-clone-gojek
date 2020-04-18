import React from 'react';
import style from '../style.js';
import {View,
        Text} from 'react-native';

const KontenMenuChild = (props) => {
    return (
        <View style={style.horizontalScrollKontenView}>
            <Text style={style.horizontalScrollKontenText}>{props.text}</Text>
        </View>
    )
}

export default KontenMenuChild;