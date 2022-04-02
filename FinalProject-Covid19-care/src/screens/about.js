import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';

import Photo from '../../assets/aboutAssets/photo.png';
import Dart from '../../assets/aboutAssets/dart.png';
import Js from '../../assets/aboutAssets/js.png';
import Py from '../../assets/aboutAssets/python.png';
import Flutter from '../../assets/aboutAssets/flutter.png';
import ReactNative from '../../assets/aboutAssets/react.png';
import Technology from '../../assets/aboutAssets/technology.png';
import Facebook from '../../assets/aboutAssets/facebook.png'
import Instagram from '../../assets/aboutAssets/instagram.png'
import Gmail from '../../assets/aboutAssets/gmail.png'
import Wa from '../../assets/aboutAssets/wa.png'
import Telegram from '../../assets/aboutAssets/telegram.png'
import Gitlab from '../../assets/aboutAssets/gitlab.png'
import Github from '../../assets/aboutAssets/github.png'
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight
  } from 'react-native-responsive-dimensions';

export default function About () {
    const GoTo = (link) => {
        Linking.openURL(link)
    }    
    return(
    <ScrollView>
        <View style={styles.container}>                
            <View  style={styles.photoStyle}>
                <Image source={Photo} style={{height: 125, width: 125, resizeMode: 'contain'}}/>
            </View>
            <View style={{alignItems: 'center'}}>
                 <Text style={styles.nameStyle}>Yoga Agustiansyah</Text>
            </View>
            <View style={{paddingTop: 20,paddingLeft: 10}}>
                <Text style={styles.textStyle}>You can find and contact me at</Text>
            </View>
            <View  style={{flexDirection: 'column', alignItems: 'center'}}>
                <View style={[styles.findStyle, {width: 170}]}>
                    <TouchableOpacity onPress={() => GoTo('https://web.facebook.com/profile.php?id=100014910220805')}>
                        <Image source={Facebook} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => GoTo('https://www.instagram.com/yoga0_120/')}>
                        <Image source={Instagram} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => GoTo('mailto:yogaagustiansyah01@gmail.com?subject=Support mail&body=Hi, kalau kamu menemukan masalah, kamu bisa menyampaikan keluhanmu ke email ini')}>
                        <Image source={Gmail} style={{height: 29.09, width: 40, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.findStyle, {width: 110, marginTop: -5, marginBottom: 40}]}>
                    <TouchableOpacity onPress={() => GoTo('https://wa.me/+6287779402434')}>
                        <Image source={Wa} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => GoTo('https://t.me/Yoga_Agustiansyah')}>
                        <Image source={Telegram} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            <Text style={styles.textStyle}>You can find my latest project on</Text>
            </View>
            <View style={styles.latestProjectStyle}>
                <TouchableOpacity onPress={() => GoTo('https://github.com/yoga220802')}>
                    <Image source={Github} style={{height: 61.94, width: 60, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => GoTo('https://gitlab.com/YogaAgustiansyah')}>
                    <Image source={Gitlab} style={{height: 55.26, width: 60, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center',marginTop: 10}}>
                <Text style={styles.skilsStyle}>Programming Skill</Text>
                <Image source={Dart} style={{marginTop: 10, height: responsiveHeight(9), width: responsiveWidth(90), resizeMode: 'contain'}}/>
                <Image source={Js} style={{marginTop: 5,  height: responsiveHeight(9), width: responsiveWidth(90), resizeMode: 'contain'}}/>
                <Image source={Py}style={{marginTop: 5,  height: responsiveHeight(9), width: responsiveWidth(90), resizeMode: 'contain'}}/>
            </View>
            <View style={{alignItems: 'center',marginTop: 40}}>
                <Text style={styles.skilsStyle}>Framework/Library</Text>
                <Image source={Flutter} style={{marginTop: 10,  height: responsiveHeight(9), width: responsiveWidth(90), resizeMode: 'contain'}}/>
                <Image source={ReactNative} style={{marginTop: 5,  height: responsiveHeight(9), width: responsiveWidth(90), resizeMode: 'contain'}}/>
            </View>  
            <View style={{alignItems: 'center',marginTop: 40}}>
                <Text style={styles.skilsStyle}>Technology</Text>
                <Image source={Technology} style={{marginTop: 10, marginBottom: 20, height: responsiveHeight(10), width: responsiveWidth(55), resizeMode: 'contain'}}/>
            </View>
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#EBEBEB',
       alignItems: 'center',
       justifyContent: 'center',
       flex: 1
    },
    photoStyle: {
        marginBottom: 5,
        marginTop: 50,
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 11
    },
    textStyle: {
        fontSize: 15,
        marginBottom: 6
    },
    latestProjectStyle: {
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        height: 80,
        width: 170,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    findStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    skilsStyle: {
        fontSize: 13,
        fontWeight: 'bold',
    }
})

