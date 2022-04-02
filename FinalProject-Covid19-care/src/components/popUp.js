import React from "react";
import { Alert } from "react-native";

const popUp = (message) => {
    Alert.alert(
        'Warning',
        `${message}`,
        [
          {
            text: 'Kembali',
            onPress: () => console.log(message),
            style: 'default',
          },
        ],
        {cancelable: false},
       );
}

export default popUp;