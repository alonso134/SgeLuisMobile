import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Input from '../components/Inputs/Input';
import Buttons from '../components/Buttons/Button';
import * as Constantes from '../utils/constantes';

export default function Sesion({ navigation }) {
  const ip = Constantes.IP;

  const [isContra, setIsContra] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const validarSesion = async () => {
    try {
      const response = await fetch(`${ip}/Expo2024/api/services/admin/profesores.php?action=getUser`, {
        method: 'GET',
      });

      const data = await response.json();

      if (data.status === 1) {
        navigation.navigate('carga');
        /* cerrarSesion();
        console.log("Se eliminó la sesión"); */
      } else {
        console.log("No hay sesión activa");
        return;
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Ocurrió un error al validar la sesión');
    }
  };

  const cerrarSesion = async () => {
    try {
      const response = await fetch(`${ip}/Expo2024/api/services/admin/profesores.php?action=logOut`, {
        method: 'GET',
      });

      const data = await response.json();

      if (data.status) {
        console.log("Sesión Finalizada");
      } else {
        console.log('No se pudo eliminar la sesión');
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión');
    }
  };

  const handlerLogin = async () => {
    // Validación de campos vacíos
    if (usuario.trim() === '' || contrasenia.trim() === '') {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('alias', usuario);
      formData.append('clave', contrasenia);

      const response = await fetch(`${ip}/Expo2024/api/services/admin/profesores.php?action=logIn`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status) {
        setContrasenia('');
        setUsuario('');
        navigation.navigate('carga');
      } else {
        console.log(data);
        Alert.alert('Error sesión', data.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión');
    }
  };

  useEffect(() => {
    validarSesion();
  }, []);

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
    backgroundColor: '#778DA9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#322C2B',
    fontWeight: '900',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});
