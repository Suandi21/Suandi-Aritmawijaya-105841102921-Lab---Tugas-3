import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


const Input = ({ text, color = "black", fontSize = 13 }) => {

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
            <View style={styles.center}>
                <Text style={[styles.text, { color, fontSize: Number(fontSize) }]}>
                    {text}
                </Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Medium',
        padding: 3,
        lineHeight: 20,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
});

export default Input ;