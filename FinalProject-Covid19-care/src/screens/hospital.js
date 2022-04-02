import React, {useState} from 'react'
import { Text, Image ,StyleSheet, View, SafeAreaView,StatusBar, TouchableOpacity, FlatList, Button} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

import {ListProvinsi} from '../components/listProvinsi'

  export default function Hospital({navigation}) {
    const [linkProvinsi, setLinkProvinsi] = useState('');
    const [titleProvinsi, setTitleProvinsi] = useState('');
    const [selectedProvinsi, setSelectedProvinsi] = useState({});

    const submit = () => {
          navigation.navigate('HospitalDetail', { linkProvinsi: linkProvinsi, titleProvinsi: titleProvinsi});
    }
    return(
            <View style={styles.container}>                    
                <View style={styles.listStyle}>
                    {
                        <FlatList
                        data={ListProvinsi}
                        keyExtractor={(item, index) => `${item._id}-${index}`}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() =>  navigation.navigate('HospitalDetail', { linkProvinsi: item.forLink, titleProvinsi: item.title})}
                                 style={styles.kartuItem}>
                                    <Image source={item.place} style={{height: 40.07, width: 30, marginRight: 20}}/>
                                    <Text style={{fontSize: 18}}>{item.title}</Text>   
                                </TouchableOpacity>

                            );
                        }}
                    />
                    }
                </View>
            </View>
        )
  };
  const styles = StyleSheet.create({
    container:{
        flex: 1,        
    },

    kartuItem:{
        marginTop: 20,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#E9E9E9',
        borderWidth: 1,
        width: responsiveWidth(90),
        height: responsiveHeight(10),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:
        'flex-start',
        alignItems: 'center' 
    },
        listStyle: {
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 100,
    }
});