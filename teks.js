import React from 'react';
import { View, Text } from 'react-native';

const Teks = () => {
  return (
    <View style={{
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        color: 'black',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 50,
      }}>
        Gojek
      </Text>
    </View>
  );
}

export default Teks;