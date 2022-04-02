import React, { useContext, useState } from 'react';
import { 
    View, 
    Modal, 
    Button, 
    StyleSheet, 
    Image, 
    Dimensions, 
    Text, 
    Share,
    TouchableNativeFeedback, 
    TouchableOpacity 
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight
  } from 'react-native-responsive-dimensions';
  
import WebView from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

function Card({ item, onPress }) {

    const [modalVisible, setModalVisible] = useState(false);

    const handleShare = () => {
        const {url, title} = item;
        var message = `${title} \n\n Read More ${url} \n\n Shared via Covid-Care App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle: `Share ${title}`}
        );
    }

    return (
        <View>
            <TouchableNativeFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.container}>
                    <Image source={{ uri: item.urlToImage}} style={styles.image} />
                    <Text style={styles.newsTitleStyle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.author}>{item.author ? item.author : 'Not Available'}</Text>
                    <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.newsPublished}>    
                            <Text style={{
                                fontSize: 10,
                                color: 'gray',
                            }}>🕘 {item.publishedAt}
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            marginRight: 10,
                        }}
                        onPress={handleShare}
                        >
                            <Ionicons name='share-social' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableNativeFeedback>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                statusBarTranslucent={false}
            >
                <View style={styles.detailNews}>
                    <View>
                        <Button
                            title="Close"
                            onPress={() => setModalVisible(!modalVisible)}
                            color={'#252525'}
                        />
                        <Button
                             title="Share"
                             onPress={handleShare}
                             color={'#DA3349'}
                        />
                    </View>
                    <WebView source={{ uri: item.url }} />
                </View>
            </Modal></View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 10,
        height: responsiveHeight(40),
        width: responsiveWidth(85),
        overflow: 'visible',
        elevation: 2
    }
    ,
    image: {
        width: width,
        height: height * 0.15,
        alignItems: 'center'
    },
    newsTitleStyle: {
        width: responsiveWidth(80),
        marginHorizontal: width * 0.03,
        marginVertical: width * 0.03,
        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: width * 0.85
    },
    newsPublished: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        padding: 2,
        elevation: 3,
        marginLeft: 10,
        marginTop: 5
    },
    author: {
        width: width,
        marginTop: -10,
        marginHorizontal: width * 0.03,
        color: 'darkgray'
    },
    desc: {
        width: width,
        marginTop: 5,
        marginHorizontal: width * 0.03,
        color: 'gray',
        maxWidth: width * 0.8
    },
    detailNews: {
        backgroundColor: '#C4C4C4',
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 5,
        overflow: 'hidden',
        flexDirection: 'column',
    }
})

export default Card;