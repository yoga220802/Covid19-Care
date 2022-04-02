import React, { useCallback, useState} from 'react'
import { useFocusEffect } from "@react-navigation/native";

import { Text ,StyleSheet, View,  Image,  ScrollView,} from 'react-native'
import axios from 'axios';
import {
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

  import HospitalImage from '../../assets/icons/hospital.png';


export default function DetailHospital({route}) {
        const { linkProvinsi, titleProvinsi } = route.params;
        console.log(titleProvinsi);
    const [hospital, setHospital] = useState([]);

    const totalHospital = async () =>axios.get(`https://lintangwisesa.github.io/Indonesia-Covid19-Maps/data/rumah_sakit/${linkProvinsi}.json`);
      const getHospital = async () => {
		try {
			const res = await totalHospital();
			const _hospital = res.data;
			console.log("res: ", res.data);
			setHospital(_hospital);
		} catch (error) {
			handleError(error);
		}
	};
    useFocusEffect(
		useCallback(() => {
			getHospital()
		}, []),
	);
    var panjang = hospital.length;
    console.log(panjang);
    return(
        <ScrollView>
           <View style={styles.container}>
                {
                    hospital.slice(0, panjang).map((hosp, type) => {

                    return(
                        <View style={styles.kartuItem} key={type}>
                            
                                <Image source={HospitalImage} style={{width : 100, height: 76.08}}/>
                                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{hosp.nama}</Text>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Provinsi {titleProvinsi}</Text>
                                <Text style={{fontSize: 15,}}>Kota/Kabupaten {hosp.kotakab}</Text>
                                <Text>Telepon : {hosp.telp}</Text>
                            
                        </View>
                    )
                })
            }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 7
    },

    kartuItem:{
        marginTop: 20,
        backgroundColor: '#E9E9E9',
        padding: 10,
        paddingTop: 20,
        width: responsiveWidth(90),
        height: responsiveWidth(60),
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'column'
        
    },

});