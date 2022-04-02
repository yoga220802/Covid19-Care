import React, { Component , useCallback, useState} from 'react'
import { useFocusEffect } from "@react-navigation/native";

import { Text, View ,StyleSheet,  Image,  ScrollView, TouchableOpacity, Button} from 'react-native'
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

  export default function Indonesia({navigation}) {
      const [indonesia, setIndonesia] = useState({});
      const [indonesiaHarian, setIndonesiaHarian] = useState({});
      const [indonesiaProvinsi, setIndonesiaProvinsi] = useState([]);

      const totalIndonesia = async () =>axios.get('https://coronavirus-19-api.herokuapp.com/countries/indonesia');
      const getTotal = async () => {
		try {
			const res = await totalIndonesia();
			const totalInd = res.data;
			// console.log("res: ", res.data);
			setIndonesia(totalInd);
		} catch (error) {
			handleError(error);
		}
	};
      const harianIndonesia = async () =>axios.get('https://data.covid19.go.id/public/api/update.json');
      const getHarian = async () => {
		try {
			const res = await harianIndonesia();
			const harian = res.data.update.penambahan;
			// console.log("res2: ", res.data.update.penambahan);
			setIndonesiaHarian(harian);
		} catch (error) {
			handleError(error);
		}
	};
      const provinsiIndonesia = async () =>axios.get('https://dekontaminasi.com/api/id/covid19/stats/');
      const getProvinsi = async () => {
		try {
			const res = await provinsiIndonesia();
			const provinsi = res.data.regions;
			console.log("res2: ", res.data.regions);
			setIndonesiaProvinsi(provinsi);
		} catch (error) {
			handleError(error);
		}
	};
    useFocusEffect(
		useCallback(() => {
			getTotal();
            getHarian();
            getProvinsi();
		}, []),
	);
    return (
        <ScrollView>
		<View style={styles.container}>
			<View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.totalStyle, {backgroundColor: '#FF7A00'}]}>
                            <Image source={Positif} style={{height: 65.25, width: 64}}/>
                            <Text style={styles.textValueStyle}>{formatAngka(indonesia.cases)} Orang</Text>
                            <Text style={styles.textTitleStyle}>Kasus Positif</Text>
                        </View>
                        <View style={[styles.totalStyle, {backgroundColor: '#32CD32'}]}>
                            <Image source={Sembuh} style={{height: 65.32, width: 73.28}}/>
                            <Text style={styles.textValueStyle}>{formatAngka(indonesia.recovered)} Orang</Text>
                            <Text style={styles.textTitleStyle}>Sudah Sembuh</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.totalStyle, {backgroundColor: '#00B2FF'}]}>
                            <Image source={Rawat} style={{height: 65.73, width: 89}}/>
                            <Text style={styles.textValueStyle}>{formatAngka(indonesia.active)} orang</Text>
                            <Text style={styles.textTitleStyle}>Dalam Perawatan</Text>
                        </View>
                        <View style={[styles.totalStyle, {backgroundColor: '#FF0000',}]}>
                            <Image source={Meninggal} style={{height: 65.88, width: 80}}/>
                            <Text style={styles.textValueStyle}>{formatAngka(indonesia.deaths)} Orang</Text>
                            <Text style={styles.textTitleStyle}>Meninggal</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.harianContain}>
                    <Text style={styles.titleTab}>Update Harian</Text>
                    <View style={{flexDirection: 'row',  justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{color: '#FF7A00', fontWeight: 'bold' }}>Pasien Baru: {formatAngka(indonesiaHarian.jumlah_positif)}</Text>
                        <Text style={{color: '#32CD32', fontWeight: 'bold'}}>Pasien Sembuh: {formatAngka(indonesiaHarian.jumlah_sembuh)}</Text>
                        </View>
                        <View style={{flexDirection: 'column',}}>
                        <Text style={{color:'#00B2FF', fontWeight: 'bold'}}>Pasien Dirawat: {formatAngka(indonesiaHarian.jumlah_dirawat)}</Text>
                        <Text style={{color: '#FF0000', fontWeight: 'bold'}}>Pasien Meninggal: {formatAngka(indonesiaHarian.jumlah_meninggal)}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contain}>
                {
                    indonesiaProvinsi.slice(0, 1).map((prov, type) => {

                    return(
                        <View style={styles.kartuItem} key={type}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.titleTab}>Kasus Provinsi</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Provinsi')}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Lainnya</Text>
                    </TouchableOpacity>
                    </View>
                            <View style={{flexDirection: 'row' , justifyContent:'space-between'}}>
                                <Text style={styles.headerKartu}>{prov.name}</Text>
                            </View>

                            <View style={{flexDirection: 'row',  justifyContent: 'space-between'}}>
                         <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={[styles.textTitle, {color: '#ff7A00'}]}>Pasien Baru </Text>
                            <Text style={[styles.textValue, {color: '#FF7A00'}]}>{formatAngka(prov.numbers.infected)}</Text>
                        </View>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={[styles.textTitle, {color: '#32CD32'}]}>Pasien Sembuh</Text>
                            <Text style={[styles.textValue, {color: '#32CD32'}]}>{formatAngka(prov.numbers.recovered)}</Text>
                        </View>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={[styles.textTitle, {color: '#FF0000'}]}>Pasien Meninggal</Text>
                            <Text style={[styles.textValue, {color: '#FF0000'}]}>{formatAngka(prov.numbers.fatal)}</Text>
                        </View>
                    </View>
                        </View>
                    )
                })
            }
            </View>
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
        marginBottom: 60
    },
    totalStyle: {
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        height: responsiveHeight(20),
        width: responsiveWidth(43),
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    textTitleStyle: {
        color: 'white',
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        fontSize: 13
    },
    textValueStyle: {
        color: 'white',
        fontSize: responsiveFontSize(1.75),
        fontWeight: 'bold',
        marginTop: 10
    },
    contain:{
        alignItems: 'center',
    },

    kartuItem:{
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#E9E9E9',
        padding: 5,
        width: responsiveWidth(90),
        height: responsiveHeight(19),
        borderRadius: 10
        
    },
    headerKartu:{
        fontSize: 15,
        fontWeight: 'bold',
        opacity: 0.87
    },
    textTitle: {
        color: '#FF7A00',
        fontWeight: 'bold',
        marginBottom: 30
    },
    textValue: {
        fontWeight: 'bold',
        fontSize: 14
    },
    titleTab: {
        fontWeight: 'bold',
        fontSize: 15},

        harianContain: {
        height: responsiveHeight(13),
        width: responsiveWidth(90),
        backgroundColor: '#E9E9E9',
        marginTop: 40,
        padding: 5,
        justifyContent: 'center'
    }
});