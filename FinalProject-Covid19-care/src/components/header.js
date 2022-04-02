import React, { Component } from 'react'
import { Text, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor:"rgba(247,97,100,1)"}}>
                <StatusBar backgroundColor={"rgba(247,97,100,1)"} barStyle={"light-content"} />
                <View style={styles.header}>
                    {this.props.children}
                </View>
               
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgba(247,97,100,1)",
        justifyContent: "center",
        alignItems: 'center',
        height: 120
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign:"center",
        padding:10,
        marginTop: 20
    },

})