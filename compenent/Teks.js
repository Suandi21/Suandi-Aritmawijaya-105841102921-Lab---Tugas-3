import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';


const Teks = ({ placeholder, borderColor, placeholderTextColor }) => {
   
    const [fontsLoaded, fontError] = useFonts({
        
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
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.input, { borderColor, fontFamily: 'Medium' }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        marginLeft:25,
    },
    input: {
        backgroundColor: 'white',
        height: 64,
        width: 343,
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
        fontFamily: 'Medium',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
});

export default Teks;