import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Provinsi from '../screens/provinsiList';
import DetailHospital from '../screens/hospitalDetail';
import Login from '../screens/login';
import Register from '../screens/register';
import Forgot from '../screens/forgot';

import MainApp from './bottomTabBar';
import DrawerApp from './drawer'

const Stack = createStackNavigator();
export default function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
          <Stack.Screen name='Forgot' component={Forgot} options={{headerShown: false}} />
          <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
          <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}}/>
          <Stack.Screen name= 'Drawer' component={DrawerApp} options={{headerShown: false}} />
          <Stack.Screen name='Provinsi' component={Provinsi} options={{title: 'Provinsi',headerTitleStyle:{fontWeight: 'bold'}, headerTitleAlign:'center', headerStyle: {backgroundColor: '#FF4E4E'}}} />
          <Stack.Screen name='HospitalDetail' component={DetailHospital} options={{title: 'Rumah Sakit',headerTitleStyle:{fontWeight: 'bold'}, headerTitleAlign:'center', headerStyle: {backgroundColor: '#FF4E4E'}}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  