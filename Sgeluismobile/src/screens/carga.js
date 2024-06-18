import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Carga() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/San_luis.png')} 
        style={styles.logo}
      />
      <Text style={styles.text}>Bienvenido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#026666',
  },
  logo: {
    width: 150,
    height: 250,
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});