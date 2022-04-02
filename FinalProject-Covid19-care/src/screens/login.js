import React, { useState} from 'react';
import { TextInput } from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity, Image, Text,} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth' 

import popUp from '../components/popUp';

import BgImage from '../../assets/loginAndRegister/bg-image.png';
import Logo from '../../assets/loginAndRegister/logo.png';
import LoginAttrib from '../../assets/loginAndRegister/login.png';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    const firebaseConfig = {
        apiKey: "AIzaSyDB251-7zUsjtHBqGUr_6JTA2fCgTY1v0w",
        authDomain: "covid19care-5395f.firebaseapp.com",
        projectId: "covid19care-5395f",
        storageBucket: "covid19care-5395f.appspot.com",
        messagingSenderId: "829647001387",
        appId: "1:829647001387:web:2727c22841fa379e34576e"
      };
      let app;
  
      if (firebase.apps.length === 0) {
        app = firebase.initializeApp(firebaseConfig)
      } else {
        app = firebase.app();
      }
    const onLogin = () => {
        const data = {email, password}
        console.log(data);    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('Drawer', {screen: 'Home', params: {screen: 'HomeScreen'}})
        })
        .catch(() => {
           if (email == "" && password != "") {
               popUp('Email harus diisi')
        }else if (email != "" && password == "") {
               popUp('Password Harus diisi!')
           }else if (email == "" && password =="") {
               popUp('Email dan password harus diisi!')
           }
           else {
               popUp('Email belum terdaftar')
           }
        })

      };
      
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.bgImageStyle} source={BgImage}/>
            <View  style={styles.logoStyle}>
                <Image source={Logo} style={{height: 97, width: 150}}/>
            </View>
            <Image source={LoginAttrib} style={{height: 117, width: 200}}/>
            <View style={styles.formStyle} >
                <TextInput  
                 style={styles.inputStyle}
                placeholder="Email..." 
                placeholderTextColor="#8E5656"
                valie={email}
                onChangeText={(value)=>setEmail(value)}/>
                </View>
            <View style={styles.formStyle} >
                <TextInput  
                secureTextEntry={passwordVisible}
                right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                style={styles.inputStyle}
                placeholder="Password..." 
                placeholderTextColor="#8E5656"
                value={password}
                onChangeText={(value)=>setPassword(value)}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                <Text style={styles.forgot}>Lupa Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogin} style={styles.footerBottomStyle}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.registerTextStyle}>Belum punya Akun? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerStyle}>REGISTER DISINI</Text>
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
        backgroundColor: "#F09191",  
    },
    forgot:{
        color:"black",
        fontSize:13,
        fontWeight: 'bold'
      },
    footerBottomStyle: {
        width:162,
    backgroundColor:"#fb5b5a",
    borderRadius:12,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
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
        fontSize: 13
    },
    registerStyle: {
        color: 'red',
        fontSize: 13,
        fontWeight: 'bold'
    }
})

