import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GlobalIcon from '../../assets/icons/global.png'
import IndonesiaIcon from '../../assets/icons/indonesia.png'
import HomeIcon from '../../assets/icons/home.png'
import SearchIcon from '../../assets/icons/search.png'
import HospitalIcon from '../../assets/icons/hospitalTab.png'

import Home from '../screens/home'
import Global from '../screens/global';
import Indonesia from '../screens/indonesia';
import Search from '../screens/searchCountries';
import Hospital from '../screens/hospital';

const Tab = createBottomTabNavigator();

const TabBarHomeButton = ({children, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{top: -30, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: 70, height: 70, borderRadius: 35, borderWidth: 7, borderColor: 'white', backgroundColor: '#F09191' }}>
        {children}
      </View>
    </TouchableOpacity>
    );
    

const MainApp =()=>(
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#F09191',
          height: 65,
          borderRadius: 8,
          bottom: -5,
          elevation: 0
        }
      }}
      initialRouteName='HomeScreen'>

      <Tab.Screen name='Global' component={Global}
      options={{
        title: 'Status Global',
        headerTitleStyle:{fontWeight: 'bold'},
         headerTitleAlign:'center',
          headerStyle: {backgroundColor: '#FF4E4E'},
           tabBarIcon: ({focused}) => (
             <View>
               <Image source={GlobalIcon} style={{height: 33, width: 33,tintColor: focused ? 'white' : 'black'}} resizeMode='contain' />
             </View>
           )
           }}/>

      <Tab.Screen name='Indonesia' component={Indonesia}
      options={{
        title: 'Status Indonesia',
        headerTitleStyle:{fontWeight: 'bold'},
        headerTitleAlign:'center',
        headerStyle: {backgroundColor: '#FF4E4E'},
        tabBarIcon: () => (
          <View>
            <Image source={IndonesiaIcon} style={{height: 35, width: 35}} resizeMode='contain' />
          </View>
        )
      }}/>

      <Tab.Screen name='HomeScreen' component={Home}
      options={{
        title: 'COVID-19',
        headerTitleStyle:{fontWeight: 'bold'},
        headerTitleAlign:'center',
        headerStyle: {backgroundColor: '#FF4E4E'},
        tabBarIcon: ({focused}) => (
          <Image source={HomeIcon} style={{height: 29.08, width: 30.56, tintColor: focused ? 'white' : 'black'}} resizeMode='contain' />
        ),
        tabBarButton: (props) => (
          <TabBarHomeButton {... props}/>
        )      
        }} />
      <Tab.Screen name='Search' component={Search}
      options={{
        title: 'Cari Negara',
        headerTitleStyle:{fontWeight: 'bold'},
        headerTitleAlign:'center',
        headerStyle: {backgroundColor: '#FF4E4E'},
        tabBarIcon: ({focused}) => (
          <View>
            <Image source={SearchIcon} style={{height: 33, width: 33, tintColor: focused ? 'white' : 'black'}} resizeMode='contain' />
          </View>
        )
        }} />

      <Tab.Screen name='Hospital' component={Hospital}
      options={{
        title: 'Cari Rumah Sakit',
        headerTitleStyle:{fontWeight: 'bold'},
        headerTitleAlign:'center',
        headerStyle: {backgroundColor: '#FF4E4E'},
        tabBarIcon: ({focused}) => (
          <View>
            <Image source={HospitalIcon} style={{height: 35, width: 35, tintColor: focused ? 'white' : 'black'}} resizeMode='contain' />
          </View>
        )       
        }} />
    </Tab.Navigator>
  )
  
  export default MainApp;