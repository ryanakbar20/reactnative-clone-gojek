import React from 'react';
import style from '../style.js';
import {View,
        Text,
        ScrollView} from 'react-native';
import KontenMenuChild from './KontenMenuChild.js';

const KontenMenu = () => {
    return (
        <View>
            <View style={style.kontenMenu}>
                <Text style={style.kontenText}>Konten buat kamu</Text>
                <View style={style.horizontalScrollKonten}>
                    <ScrollView horizontal style={style.horizontalScrollKontenMenu}>
                        <KontenMenuChild text="Apa aja"/>
                        <KontenMenuChild text="Promo"/>
                        <KontenMenuChild text="Jalan jalan"/>
                        <KontenMenuChild text="Makan"/>
                        <KontenMenuChild text="Pembayaran"/>
                        <KontenMenuChild text="Apa aja"/>
                        <KontenMenuChild text="Promo"/>
                    </ScrollView>
                </View>
            </View>
            <View style={style.lineKontenMenu}/>
        </View>
        
    )
}

export default KontenMenu;