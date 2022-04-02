import React, {useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity, Linking, Share} from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon2 from 'react-native-vector-icons/Ionicons'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { useNavigation } from '@react-navigation/native'

import About from '../screens/about';
import MainApp from './bottomTabBar';

import Logo from '../../assets/loginAndRegister/logo.png'
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    const [user, setUser] = useState([])
    const navigation = useNavigation();
    const onShare = () => {
        // bit.ly/Covid19-Care
        var link = 'https://bit.ly/Covid-19-Care'
        var message = `Dapatkan informasi dan berita tentang Covid-19 beserta berita terkini lainnya di aplikasi Covid-19 Care. \n\n Download aplikasinya di \n${link} `;
        return Share.share(
            {message, url: message},
            {dialogTitle: `Share Covid-19 Care`}
        );
    }
    const logOut = () => {
        firebase.auth().signOut()
        .then(() => {
            console.log('Berhasil Logout');
            navigation.navigate('Login')
        })
    }
    useEffect(() => {
        const userInfo = firebase.auth().currentUser
        setUser(userInfo)
    }, [])
    return (
    <View style={{flex: 1}}>
        <View style={{height: 180, backgroundColor: '#FFDADA', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={Logo} style={{height: 80, width: 133,resizeMode : 'contain', marginVertical: 10}}/>
            <Text style={{color : 'black'}}>Version 1.0.0</Text>
            <Text style={{fontSize: 10, color: 'grey'}}>Anda login sebagai {user.email}</Text>
        </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <TouchableOpacity onPress={onShare}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <Icon2 name='share-social-outline' size={22}/>
                    <Text style={{marginLeft: 10}}>Share This App</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon2 name='exit-outline' size={22}/>
                    <Text style={{marginLeft: 10}}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )}

const DrawerApp = () => (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{
        drawerActiveBackgroundColor: '#F09191',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black'
    }}
    >
        <Drawer.Screen name='Home' component={MainApp}
        options={{
            headerShown: false,
            drawerIcon: ({color}) => (
            <Icon2 name='home-outline' size={22} color={color} />
            )
        }}
        />
        <Drawer.Screen name='About' component={About}  options={{
            headerShown: false,
            drawerIcon: ({color}) => (
            <Icon2 name='information-circle-outline' size={28} color={color} />
            )
        }}/>
    </Drawer.Navigator>
)

export default DrawerApp;