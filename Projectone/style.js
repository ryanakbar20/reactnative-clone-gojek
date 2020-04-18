import React from 'react';
import {StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

const style = StyleSheet.create({
    navigationBar : {
      backgroundColor : 'red',
      flexDirection: 'row'
    },
    content : {
      backgroundColor: 'white',
      flex: 1,
      paddingVertical: 8
    },
    body : {
      backgroundColor: 'blue',
      flex: 1
    },
    buttonNavigation : {
      backgroundColor: '#EEEEEE',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    buttonNavigationIcon : {
        height: 25,
        width: 25,
        marginBottom: 4,
        marginTop: 8
    },
    buttonNavigationText : {
        fontSize: 10,
        color: '#202221',
        marginBottom: 4
    },
    searchBarInput : {
        height: 40,
        width: 230,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        backgroundColor: 'white',
        paddingLeft: 45,
        color: '#202221',
        fontSize: 10,
        position: 'relative'
    },
    searchBarImage : {
        height: 26,
        width: 26,
        position: 'absolute',
        top: 8,
        left: 15
    },
    promoBar : {
        height: 40,
        width: 74,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        backgroundColor: '#FAFAFA',
        marginRight: 0,
        marginLeft: 24,
        position: 'relative'
    },
    promoBarImage : {
        position: 'absolute',
        height: 24,
        width: 24,
        top: 7,
        left: 6
    },
    promoBarText : {
        fontSize: 10,
        position: 'absolute',
        top: 11,
        left: 35
    },
    searchBar : {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 16
    },
    gopaySaldo : {
        height: 40,
        backgroundColor: '#2A5DB6',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        marginTop: 8,
        flexDirection: 'row',
        position: 'relative',
        marginHorizontal: 16
    },
    gopayFeatures : {
        backgroundColor: '#2F65BD',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        paddingTop: 18,
        paddingBottom: 12,
        flexDirection: 'row',
        marginHorizontal: 16
    },
    gopaySaldoImage : {
        height: 14,
        width: 71,
        marginTop: 15,
        marginLeft: 10
    },
    gopaySaldoText : {
        color: 'white',
        fontSize: 13,
        position: 'absolute',
        right: 10,
        top: 15,
        fontWeight: 'bold'
    },
    gopayFeaturesButton : {
        alignItems: 'center',
        width: 50,
        flex: 1
    },
    gopayFeaturesButtonImage : {
        height: 27,
        width: 27
    },
    gopayFeaturesButtonText : {
        fontSize: 12,
        color: 'white',
        marginTop: 13,
        fontWeight: 'bold'
    },
    gojekFeatures : {
        marginTop: 22,
        marginHorizontal: 16
    },
    gojekFeaturesButton : {
        alignItems: 'center',
        width: 60
    },
    gojekFeaturesButtonImage : {
        height: 40,
        width: 40
    },
    gojekFeaturesButtonText : {
        fontSize: 12,
        marginTop: 10,
        color: '#202221'
    },
    kontenMenu : {
        marginLeft: 16,
        marginTop: 40
    },
    kontenText : {
        fontSize: 18,
        color: '#191B1A',
        fontWeight: 'bold'
    },
    horizontalScrollKontenMenu: {
        flexDirection: 'row',
        marginTop: 22
    },
    horizontalScrollKontenView : {
        backgroundColor: '#31B058',
        padding: 8,
        borderRadius: 20,
        marginRight: 8
    },
    horizontalScrollKontenText : {
        color: 'white',
        fontSize: 12
    },
    lineKontenMenu : {
        height: 1,
        backgroundColor: '#E8E9EB',
        marginTop: 8,
        marginHorizontal: 16
    },
    banner : {
        marginHorizontal: 16,
        marginVertical: 16,
        height: 164
    },
    bannerImg : {
        height: undefined,
        width: undefined,
        flex: 1,
        borderRadius: 8
    },
    bannerMedium: {
        height: 210,
        marginHorizontal: 16,
        marginTop: 32
    },
    bannerMediumImg : {
        height: undefined,
        width: undefined,
        flex: 1,
        borderRadius: 8
    },
    bannerLarge : {
        height: 255,
        borderRadius: 8,
        marginHorizontal: 16,
        backgroundColor: 'pink',
        marginTop: 20
    },
    bannerLargeImg : {
        height: undefined,
        width: undefined,
        flex: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    bannerLargeText : {
        height: 90,
        backgroundColor: 'white',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 16,
        paddingTop: 20,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {height: 2},
        shadowRadius: 3.84,
        elevation: 3
    },
    bannerLargeTitle : {
        fontSize: 12,
        color: '#191919',
        fontWeight: 'bold'
    },
    bannerLargeSubtitle : {
        fontSize: 11,
        color: '#434544',
        marginTop: 8
    }
  });

  export default style;