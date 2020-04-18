import React from 'react';
import style from '../style.js'
import {
    View,
    Text,
    Image
} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const ButtonNavigation = (props) => {
    return(
        <View style={style.buttonNavigation}>
                <Image style={style.buttonNavigationIcon} source={props.img}/>
                <Text>{props.text}</Text>
        </View>
    )
}

export default ButtonNavigation;