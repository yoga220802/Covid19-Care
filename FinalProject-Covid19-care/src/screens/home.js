import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator,} from "react-native";
import {
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

import newsApi from '../API/newsApi'
import Card from '../components/newsCard'


export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [newstech, setNewsTech] = useState([]);

useEffect(()=> {
    getNewsFromAPI()
}, [])


function getNewsFromAPI() {
    newsApi.get('top-headlines?country=id&category=health&apiKey=ae3fc223b1e144f2bee31cff65a7fe32')
    .then(async function(response){
        setNewsTech(response.data)
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        setLoading(false);
    })
}
    return(
    <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
        <View style={styles.container}>
            <SafeAreaView style={styles.contentStyle}>
                <Text style={{fontWeight:  'bold', marginBottom: 10}}>
                    Apa Itu Covid-19 ?
                </Text>
                <Text style={{textAlign: 'center'}}>
                    COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.
                </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.contentStyle}>
                <Text style={{fontWeight:  'bold', marginBottom: 10}}>
                    Bagaimana mencegah penularan Covid-19 ?
                </Text>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>1. </Text>
                    <Text>
                        {`Selalu jaga jarak aman dari orang lain \n(minimal 1 meter), meskipun mereka tidak \ntampak sakit.`}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>2. </Text>
                    <Text>
                       {`Kenakan masker di ruang publik, terutama di dalam ruangan atau jika pembatasan fisik \ntidak dimungkinkan.`}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>3. </Text>
                    <Text>
                    {`Sebaiknya pilih ruang terbuka dan berventilasi baik. Buka jendela jika berada di dalam \nruangan.`}
                     </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>4. </Text>
                    <Text>
                    {`Cuci tangan Anda secara rutin. Gunakan sabun dan air, atau cairan pembersih tangan \nberbahan alkohol.`}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>5. </Text>
                    <Text>
                    {`Ikuti vaksinasi ketika giliran Anda. Ikuti panduan \nsetempat terkait vaksinasi.`}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>6. </Text>
                    <Text>
                    {`Saat batuk atau bersin, tutup mulut dan hidung \nAnda dengan lengan atau tisu.`}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>7. </Text>
                    <Text>
                    Jangan keluar rumah jika merasa tidak enak badan.
                    </Text>
                </View>
            </SafeAreaView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <SafeAreaView style={styles.newsContentStyle}>
                <Text style={{fontWeight:  'bold', marginBottom: 10}}>
                    Berita terbaru mengenai kesehatan
                </Text>
            {isLoading ? <ActivityIndicator size="large" color="#DA3349" /> : (
                <ScrollView horizontal={true} style={{ width: "100%" }}>
            <FlatList
                data={newstech.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => (
                    <Card 
                        item={item}
                    />
                )}
            />
            </ScrollView>
            )}
            </SafeAreaView>
            </View>
            
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70
    },
    newsContentStyle:{
        width: responsiveWidth(90),
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#eaeaea",
		padding: 5,
		marginVertical: 5,
        backgroundColor: '#C4C4C4'
    },
    contentStyle:{
        width: responsiveWidth(90),
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#eaeaea",
		padding: 5,
		marginVertical: 5,
        backgroundColor: '#C4C4C4'
    },
})