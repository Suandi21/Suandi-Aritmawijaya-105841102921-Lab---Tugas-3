import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


const Input = ({placeholder, bordercolor, placeholderTextColor}) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.input, {bordercolor}]}

            />

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        marginTop: 10,
        },
    input : {
        backgroundColor: 'white',
        height: 64,
        width: 343,
        borderwidth: 3,
        paddingHorizontal: 8,
        borderRadius: 4

    },
    text: {
        fontSize: 16,
    },
});

export default Input;