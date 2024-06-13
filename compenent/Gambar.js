import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const Gambar = ({ imageSource }) => {
    

    return (

            <View style={styles.container}>
                <Image source={imageSource} style={styles.image} />
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 92,
        height: 64,
        marginTop: -5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2,
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default Gambar;
