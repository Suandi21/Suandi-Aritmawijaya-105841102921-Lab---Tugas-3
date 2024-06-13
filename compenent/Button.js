import React from 'react';

import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';        


const Button = ({backgroundColor, text, placeholder}) => {

    const [fontsLoaded, fontError] = useFonts({
 
        'Medium' : require('../assets/fonts/Metropolis-Medium.otf'),
        'Bold' : require('../assets/fonts/Metropolis-Medium.otf'),
        'Semibold' : require('../assets/fonts/Metropolis-Medium.otf'),
        'Black' : require('../assets/fonts/Metropolis-Medium.otf'),
        
      });
          if (!fontsLoaded) {
            return (
          <View>
              <Text>Font tidak ditemukan !</Text>
          </View>
        );
    }
    


    return (
       
        <View style={{
            backgroundColor: backgroundColor,
            placeholder: placeholder,
            borderRadius: 25,
            width: 326,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
           marginLeft: 35,
            marginBottom: 100
        }}>
  
        <Text style={{
            color: 'white',
            lineHeight: 10,
            fontSize: 14,
            fontWeight: 'bold',
        }}>
            {text}
        </Text>
    </View>

    )
  }

export default Button;