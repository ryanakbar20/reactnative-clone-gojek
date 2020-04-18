import React from 'react';
import style from '../style.js'
import {View,
        TextInput,
        Text,
        Image} from 'react-native';

const SearchBar = () => {
    return(
        <View style={style.searchBar}>
            <View>
              <TextInput style={style.searchBarInput} value="Cari Layanan Gojek..."/>
              <Image style={style.searchBarImage} source={require('../icon/search.png')}/>
            </View>
            <View style={style.promoBar}>
              <Image style={style.promoBarImage} source={require('../icon/promo.png')}/>
              <Text style={style.promoBarText}>Promo</Text>
            </View>
        </View>
    )
}

export default SearchBar;