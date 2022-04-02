import React, { Component , useCallback, useState} from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { Text, SafeAreaView ,StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native'
import axios from 'axios';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight
  } from 'react-native-responsive-dimensions';

const formatAngka = amount => {
    return Number(amount)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  export default function Provinsi() {
    const [indonesiaProvinsiList, setIndonesiaProvinsiList] = useState([]);

    const provinsiIndonesia = async () =>axios.get('https://dekontaminasi.com/api/id/covid19/stats/');
      const getProvinsi = async () => {
		try {
			const res = await provinsiIndonesia();
			const provinsi = res.data.regions;
			console.log("res2: ", res.data.regions);
			setIndonesiaProvinsiList(provinsi);
		} catch (error) {
			handleError(error);
		}
	};

    useFocusEffect(
		useCallback(() => {
            getProvinsi();
		}, []),
	);
    var panjang_p = indonesiaProvinsiList.length;

    return(
        <ScrollView>
        <View style={styles.container}>
                {
                    indonesiaProvinsiList.slice(0, panjang_p).map((prov, type) => {

                    return(
                        <View style={styles.kartuItem} key={type}>
                            
                            <View style={{flexDirection: 'row' , justifyContent:'space-between'}}>
                                <Text style={styles.headerKartu}>{prov.name}</Text>
                            </View>

                            <View style={{flexDirection: 'row',  justifyContent: 'space-between'}}>
                         <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={[styles.textTitle, {color: '#FF7A00'}]}>Pasien Baru </Text>
                            <Text style={[styles.textValueKuning, {color: '#FF7A00'}]}>{formatAngka(prov.numbers.infected)}</Text>
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
        </ScrollView>
        )
  };

  const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 7
    },

    kartuItem:{
        marginTop: 10,
        backgroundColor: '#E9E9E9',
        padding: 5,
        width: responsiveWidth(90),
        height: responsiveHeight(16),
        borderRadius: 10
        
    },
    headerKartu:{
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.87
    },
    textTitle: {
        fontWeight: 'bold',
        marginBottom: 30,
        fontSize: 13
    },
    textValue: {
    fontWeight: 'bold',
    fontSize: 14
},
   
});