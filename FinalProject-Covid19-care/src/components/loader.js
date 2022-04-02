import React, { Component } from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'

export default class Loader extends Component {
    render() {
        return (
            <View style={styles.loading}>
               <ActivityIndicator size="large" color="rgba(98,120,245,1)"/>
               <Text style={{color:"rgba(98,120,245,1)",padding:10,fontWeight:"bold"}}>Loading ... </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loading: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
})