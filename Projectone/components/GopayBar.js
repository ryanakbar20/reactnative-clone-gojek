import React from 'react';
import style from '../style.js';
import {View,
        Text,
        Image} from 'react-native';
import GopayFeaturesButton from './GopayFeaturesButton.js';

const GopayBar = () => {
    return (
        <View style={style.gopayBar}>
            <View style={style.gopaySaldo}>
                <Image style={style.gopaySaldoImage} source={require('../icon/gopay.png')}/>
                <Text style={style.gopaySaldoText}>Rp21000</Text>
            </View>
            <View style={style.gopayFeatures}>
                <GopayFeaturesButton text="Bayar" img={require('../icon/bayar.png')} />
                <GopayFeaturesButton text="Promo" img={require('../icon/persen.png')} />
                <GopayFeaturesButton text="Isi Saldo" img={require('../icon/isisaldo.png')} />
                <GopayFeaturesButton text="Lainnya" img={require('../icon/gopay-lainnya.png')} />
            </View>
        </View>
    )
}

export default GopayBar;