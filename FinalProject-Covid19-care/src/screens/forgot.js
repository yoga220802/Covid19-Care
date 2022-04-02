import React, { useState } from 'react';
import {StyleSheet, View, TouchableOpacity, Image, TextInput, Text, Alert} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth' 
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import BgImage from '../../assets/loginAndRegister/bg-image.png';
import ForgotAttrib from '../../assets/loginAndRegister/forgot.png';
import Back from '../../assets/icons/back.png';


export default function Forgot({navigation}) {
    const [email, setEmail] = useState('')

    const onForgot = () => {
        const data =  { email}
        console.log(data);
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            Alert.alert(
                'Reset Password Request',
                'Email sudah terkirim',
                [
                  {
                    text: 'Kembali Ke Login',
                    onPress: () => navigation.navigate('Login'),
                    style: 'default',
                  },
                ],
                {cancelable: false},
               );
            console.log("Email Terkirim");
        })
        .catch(() => {
            if (email == "") {
                Alert.alert(
                    'Peringatan!',
                    'Email harus diisi',
                    [
                      {
                        text: 'Kembali',
                        onPress: () => console.log("Gagal"),
                        style: 'default',
                      },
                    ],
                    {cancelable: false},
                   );
            }
        })
      };
    return (
        <View style={{flex:1}}>
            <Image style={styles.bgImageStyle} source={BgImage}/>
            <View style={{justifyContent:'flex-start'}}>
                <TouchableOpacity style={{marginTop:30, marginLeft: 20}} onPress={() => navigation.goBack(null)} >
                    <Image source={Back} style={{height: 30, width: 30}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerStyle}>
            <Image source={ForgotAttrib} style={{height: 175, width: 175}} />
                <Text style={{fontSize:15, fontWeight:'bold'}}>Kamu lupa passwordmu?</Text>
                <Text style={{fontSize:13, marginBottom: 20, marginTop: 15}}>Coba tenangkan pikiranmu dan coba lagi</Text>
                <Text style={{fontSize:15, fontWeight:'bold', marginBottom: 20}}>Jika masih, tidak ingat reset passwordmu</Text>

                <View style={styles.formStyle} >
                    <TextInput  
                    style={styles.inputStyle}
                    placeholder="Masukan Email Konfirmasi" 
                    placeholderTextColor="#8E5656"
                    valie={email}
                    onChangeText={(value)=>setEmail(value)}/>
                    </View>
                <TouchableOpacity onPress={onForgot} style={styles.footerBottomStyle}>
                    <Text style={styles.loginText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}



const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgImageStyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    logoStyle: {
        marginBottom: 20,       
    },
    loginAttribStyle: {
        marginTop: 27,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formStyle: {
        width: responsiveWidth(90),
        alignContent: 'center',
        backgroundColor:"#F09191",
        borderRadius:10,
        height: responsiveHeight(8),
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputStyle: {
        height:50,
        color:"black" 
    },
    forgot:{
        color:"black",
        fontSize:12,
        fontWeight: 'bold'
      },
    footerBottomStyle: {
        width:200,
    backgroundColor:"#fb5b5a",
    borderRadius:12,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    marginBottom:10
    },
    loginText: {
        fontSize:18,
        color: 'black',
        fontWeight: 'bold'
    },
    toRegisterStyle: {
        margin: 25,
        alignItems: 'center'
    },
    registerTextStyle: {
        color: 'black',
        fontSize: 12
    },
    registerStyle: {
        color: 'red',
        fontSize: 12
    }
})

