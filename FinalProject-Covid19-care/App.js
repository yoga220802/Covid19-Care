import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Router from './src/router/index'

export default function App() {
  return (
    <Router/>
  );
}

// const firebaseConfig = {
//   apiKey: "AIzaSyDB251-7zUsjtHBqGUr_6JTA2fCgTY1v0w",
//   authDomain: "covid19care-5395f.firebaseapp.com",
//   projectId: "covid19care-5395f",
//   storageBucket: "covid19care-5395f.appspot.com",
//   messagingSenderId: "829647001387",
//   appId: "1:829647001387:web:2727c22841fa379e34576e"
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
