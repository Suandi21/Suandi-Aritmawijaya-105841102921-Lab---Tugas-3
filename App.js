import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
const App = () => {


  const [fontsLoaded, fontError] = useFonts({
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Thin': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Black': require('./assets/fonts/Metropolis-Bold.otf'),
  });
  if (!fontsLoaded) 
    return <View>
    <Text>Font tidak ditemukan !</Text>
  </View>
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{fontSize :30}}>Hello World</Text>
      <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Bold</Text>
      <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Black</Text>
      <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Semibold</Text>
      <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Medium</Text>

    </View>
  )
}
export default App