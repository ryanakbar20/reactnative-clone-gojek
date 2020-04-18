import React from 'react';
import style from '../style.js';
import {View, Image, Text} from 'react-native';
import GojekFeaturesButton from './GojekFeaturesButton.js';

const GojekFeatures = () => {
    return(
        <View style={style.gojekFeatures}>
            <View style={{flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 22}}>
                <GojekFeaturesButton text="GoRide" img={require('../icon/goride.png')} />
                <GojekFeaturesButton text="GoCar" img={require('../icon/gocar.png')} />
                <GojekFeaturesButton text="GoFood" img={require('../icon/gofood.png')} />
                <GojekFeaturesButton text="GoBluebird" img={require('../icon/gobluebird.png')} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <GojekFeaturesButton text="GoSend" img={require('../icon/gosend.png')} />
                <GojekFeaturesButton text="GoPulsa" img={require('../icon/gopulsa.png')} />
                <GojekFeaturesButton text="GoNearby" img={require('../icon/gonearby.png')} />
                <GojekFeaturesButton text="Lainnya" img={require('../icon/lainnya.png')} />
            </View>
        </View>
    )
}

export default GojekFeatures;