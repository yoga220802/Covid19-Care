import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Header from '../components/header'
import Loader from '../components/loader'
import { TextInput, FlatList } from 'react-native-gesture-handler';
import {getApi} from '../API/getApi'
import Card from '../components/countrySearchCard'

const formatAngka = amount => {
    return Number(amount)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };


export default class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            Loading: true
        };
        this.arrayholder = [];
    }
    componentDidMount() {
        this.Static()
    }
    async Static() {
        let data = await getApi("https://coronavirus-19-api.herokuapp.com/countries")
        this.setState({ data: data, Loading: "false" })
        this.arrayholder = this.state.data;
    }
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.country.toUpperCase()}`
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };

    renderHeader = () => {
        return (

            <TextInput
                style={{ backgroundColor: "white", textAlign: "center" }}
                placeholder="Type Here..."
                onChangeText={text => this.searchFilterFunction(text)}
                value={this.state.value}
            />


        );
    };
  
    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <TextInput
                        style={{ backgroundColor: "white", textAlign: "center", margin: 20, borderRadius: 10 ,height:40, width: 200}}
                        placeholder="search..."
                        onChangeText={text => this.searchFilterFunction(text)}
                        value={this.state.value}
                    />
                </Header>
                {this.state.Loading === true
                    ?
                    <Loader />
                    :
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                        <FlatList
                            removeClippedSubviews={true}
                            initialNumToRender={5}
                            maxToRenderPerBatch={10}
                            windowSize={10}
                            style={{ backgroundColor: "white" }}
                            data={this.state.data}
                            keyExtractor={item => item.country}
                            renderItem={({ item }) => (
                                <Card>
                                    <Text style={[styles.countryCardText,{width:100}]}>{item.country}</Text>
                                    <View>
                                        <Text style={[styles.cardText, { color: "orange" }]}>Total Kasus : {formatAngka(item.cases)}</Text>
                                        <Text style={[styles.cardText, { color: "green" }]}>Sembuh : {formatAngka(item.recovered)}</Text>
                                        <Text style={[styles.cardText, { color: "red" }]}>Meninggal : {formatAngka(item.deaths)}</Text>

                                    </View>
                                    <View>
                                    </View>
                                </Card>
                            )}
                        />
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        marginBottom: 70
    },
    cardText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    countryCardText: {
        fontSize: 20,
        fontWeight: "bold",
    },

})
