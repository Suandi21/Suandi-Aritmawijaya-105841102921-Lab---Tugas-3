import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';


const Judul = ({text}) => {

    const [fontsLoaded, fontError] = useFonts({
        'Bold': require('../assets/fonts/Metropolis-Bold.otf'),
        'Medium' : require('../assets/fonts/Metropolis-Medium.otf'),
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
            alignItems: 'Right',
            marginLeft: 20,
            marginTop: 20,
        }}>
            <Text style={{
                fontSize :  34,
                fontFamily: 'Bold',
                }}>
                {text}
            </Text>
        </View>
    
    )
}

export default Judul;