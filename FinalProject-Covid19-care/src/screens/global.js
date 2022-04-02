import React, { useCallback, useState} from 'react'
import { useFocusEffect } from "@react-navigation/native";

import { Text, SafeAreaView ,StyleSheet, View,  Image,  ScrollView,} from 'react-native'
import axios from 'axios';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight
  } from 'react-native-responsive-dimensions';

  import Positif from '../../assets/covidCase/positif.png';
  import Sembuh from '../../assets/covidCase/sembuh.png';
  import Rawat from '../../assets/covidCase/dirawat.png';
  import Meninggal from '../../assets/covidCase/meninggal.png';

const formatAngka = amount => {
    return Number(amount)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

export default function Global() {
    const [global, setGlobal] = useState({});

    const totalWorld = async () =>axios.get('https://coronavirus-19-api.herokuapp.com/countries/world');
      const getTotalWorld = async () => {
		try {
			const res = await totalWorld();
			const _totalWorld = res.data;
			console.log("res: ", res.data);
			setGlobal(_totalWorld);
		} catch (error) {
			handleError(error);
		}
	};
    useFocusEffect(
		useCallback(() => {
			getTotalWorld()
		}, []),
	);

    return(
        <ScrollView>
            <View style={styles.container}>
                <SafeAreaView style={[styles.content, {backgroundColor: '#FF7A00'}]}>
                    <Image source={Positif} style={{height: 82.51, width: 80}}/>
                    <Text style={styles.textValueStyle}>{formatAngka(global.cases)} Orang</Text>
                    <Text style={styles.textTitleStyle}>Kasus Positif</Text>
                </SafeAreaView>
                <SafeAreaView style={[styles.content, {backgroundColor: '#32CD32', marginTop: 30}]}>
                    <Image source={Sembuh} style={{height: 92.63, width: 120}}/>
                    <Text style={styles.textValueStyle}>{formatAngka(global.recovered)} Orang</Text>
                    <Text style={styles.textTitleStyle}>Sudah Sembuh</Text>
                </SafeAreaView>
                <SafeAreaView style={[styles.content, {backgroundColor: '#00B2FF', marginTop: 30}]}>
                    <Image source={Rawat} style={{height: 89.89, width: 125}}/>
                    <Text style={styles.textValueStyle}>{formatAngka(global.active)} orang</Text>
                    <Text style={styles.textTitleStyle}>Dalam Perawatan</Text>
                </SafeAreaView>
                <SafeAreaView style={[styles.content, {backgroundColor: '#FF0000', marginTop: 30}]}>
                    <Image source={Meninggal} style={{height: 94.79, width: 120}}/>
                    <Text style={styles.textValueStyle}>{formatAngka(global.deaths)} Orang</Text>
                    <Text style={styles.textTitleStyle}>Meninggal</Text>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 80
    },
    content: {
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        height: responsiveHeight(30),
        width: responsiveWidth(81),
        borderRadius: 10,
        padding: 10,
    },
    
    textTitleStyle: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold'
    },
    textValueStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
})
