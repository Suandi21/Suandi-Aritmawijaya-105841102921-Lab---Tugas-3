import React from 'react';
import { View, Text } from 'react-native';

const Teks = ({text = "Default Text", color = "black", fontSize = 14}) => {

    return (

        <View style={{
            marginLeft: 200,
            marginTop: 10
        }}>
            <Text style={{
                fontSize :  Number (fontSize),
                color: color
                }}>
                {text}
            </Text>
        </View>

    )
}

export default Teks;