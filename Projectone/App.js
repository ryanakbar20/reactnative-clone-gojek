import React from 'react';
import style from './style.js';
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import SearchBar from './components/SearchBar.js';
import GopayBar from './components/GopayBar.js';
import GojekFeatures from './components/GojekFeatures.js';
import KontenMenu from './components/KontenMenu.js';
import NavigationBar from './components/NavigationBar.js';
import Banner from './components/Banner.js';
import BannerMedium from './components/BannerMedium.js';
import BannerLarge from './components/BannerLarge.js';

class App extends React.Component {
  render () {
    return (
      <View style={style.body}>
        <ScrollView style={style.content}>
          <SearchBar />
          <GopayBar />
          <GojekFeatures />
          <KontenMenu />
          <Banner img={require('./icon/waktunya-ngemil.png')} />
          <Banner img={require('./icon/hemat-pakai-gopay.png')} />
          <BannerMedium img={require('./icon/topup-gopay.png')} />
          <BannerLarge img={require('./icon/ades.png')}/>
          <View style={{height: 16}}/>
        </ScrollView>
        <NavigationBar />
      </View>
    );
  }
}

export default App;