import React from 'react';
import {View} from 'react-native';
import style from '../style.js'
import ButtonNavigation from './ButtonNavigation';

const NavigationBar = () => {
    return(
        <View style={style.navigationBar}>
          <ButtonNavigation text="Beranda" img={require('../icon/active_beranda.png')} />
          <ButtonNavigation text="Pesanan" img={require('../icon/pesanan.png')} />
          <ButtonNavigation text="Chat" img={require('../icon/chat.png')} />
          <ButtonNavigation text="Inbox" img={require('../icon/inbox.png')} />
          <ButtonNavigation text="Akun" img={require('../icon/akun.png')} />
        </View>
    )
}

export default NavigationBar;