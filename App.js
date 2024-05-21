import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import CustomButton from './button';
import Teks from './teks'; 

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Teks />
        <Image 
          source={require('./assets/Gojek.png')} 
          style={{ width: 300, height: 300, marginVertical: 10 }}
        />
        <CustomButton />
      </View>
    </SafeAreaView>
  );
}