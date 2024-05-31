import React from 'react';
import { View, Text } from 'react-native';

const ButtonComponent = ({ backgroundColor, text }) => {
    return (
      <View style={{
        backgroundColor: backgroundColor,
        width: 343,
        height: 48,
        borderRadius: 25,
        marginLeft: 20,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          lineHeight: 30,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
          {text}
        </Text>
      </View>
    )
  }

  export default ButtonComponent;