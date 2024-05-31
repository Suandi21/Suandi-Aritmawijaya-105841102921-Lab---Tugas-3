import React from 'react';
import { Text, View } from 'react-native';

const Judul = ({ text }) => {
  return (
    <View style={{
      alignItems: 'Right',
      marginLeft: '10',
      marginTop: '10',
    }}>
      <Text style={{
        color: 'black', 
        lineHeight: 70,
        fontSize: 25,
        fontWeight: 'bold',
      }}>

        {text}

      </Text>
    </View>
  );
};

export default Judul;
