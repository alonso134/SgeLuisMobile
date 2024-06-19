import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/Inputs/Input';
import Buttons from '../components/Buttons/Button';

export default function Sesion({ navigation }) {
  const [isContra, setIsContra] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const handlerLogin = () => {
   
      navigation.navigate('carga'); 
  };

  const irRegistrar = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/San_luis.png')}
        style={styles.image}
      />
      <Text style={styles.texto}>Iniciar Sesión</Text>
      <Input
        placeHolder='Usuario'
        setValor={usuario}
        setTextChange={setUsuario}
      />
      <Input
        placeHolder='Contraseña'
        setValor={contrasenia}
        setTextChange={setContrasenia}
        contra={isContra}
      />
      <Buttons
        textoBoton='Iniciar Sesión'
        accionBoton={handlerLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#FFFEFE',
    fontWeight: '900',
    fontSize: 20,
  },

  image: {
    width: 150,
    height: 250,
    marginBottom: 10,
  },
});