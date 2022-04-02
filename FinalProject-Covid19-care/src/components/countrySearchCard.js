import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        padding:20,
        margin:10,
        backgroundColor:"white",
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
})