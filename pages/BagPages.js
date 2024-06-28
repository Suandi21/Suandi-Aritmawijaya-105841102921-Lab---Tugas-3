import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BagPages = () => {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Bag</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BagPages;