import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import * as Constantes from '../utils/constantes';
import Constants from 'expo-constants';
// Import de componentes
import Input from '../components/Inputs/Input';
import InputEmail from '../components/Inputs/InputEmail';
import Buttons from '../components/Buttons/Button';

export default function SignUp({ navigation }) {
    const ip = Constantes.IP;

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [alias, setAlias] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [confirmarClave, setConfirmarClave] = useState('');

    const handleLogout = async () => {
        navigation.navigate('Sesion');
    };

    const handleCreate = async () => {
        try {
            // Validar los campos
            if (!nombre.trim() || !apellido.trim() || !alias.trim() || !correo.trim() || !clave.trim() || !confirmarClave.trim()) {
                Alert.alert("Debes llenar todos los campos");
                return;
            }

            // Si todos los campos son válidos, proceder con la creación del usuario
            const formData = new FormData();
            formData.append('nombreProfesor', nombre);
            formData.append('apellidoProfesor', apellido);
            formData.append('aliasProfesor', alias);
            formData.append('correoProfesor', correo);
            formData.append('claveProfesor', clave);
            formData.append('confirmarClave', confirmarClave);

            const response = await fetch($,{ip}/EXPO2024/api/services/admin/profesores.php?action=signUp: {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.status) {
                Alert.alert('Datos Guardados correctamente');
                navigation.navigate('Sesion');
            } else {
                Alert.alert('Error', data.error);
            }
        } catch (error) {
            Alert.alert('Ocurrió un error al intentar crear el usuario');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <Text style={styles.texto}>Registrar Usuario</Text>
                <Input
                    placeHolder='Nombre Profesor'
                    setValor={nombre}
                    setTextChange={setNombre}
                />
                <Input
                    placeHolder='Apellido Profesor'
                    setValor={apellido}
                    setTextChange={setApellido}
                />
                <InputEmail
                    placeHolder='Alias Profesor'
                    setValor={alias}
                    setTextChange={setAlias}
                />
                <InputEmail
                    placeHolder='Correo Profesor'
                    setValor={correo}
                    setTextChange={setCorreo}
                />
                <Input
                    placeHolder='Clave'
                    contra={true}
                    setValor={clave}
                    setTextChange={setClave}
                />
                <Input
                    placeHolder='Confirmar Clave'
                    contra={true}
                    setValor={confirmarClave}
                    setTextChange={setConfirmarClave}
                />

                <Buttons
                    textoBoton='Registrar Usuario'
                    accionBoton={handleCreate}
                />

                <Buttons
                    textoBoton='Ir al Login'
                    accionBoton={handleLogout}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778DA9',
        paddingTop: Constants.statusBarHeight + 10, // Aumenta el margen superior
    },
    scrollViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, // Aumenta el padding alrededor del contenido
    },
    texto: {
        color: '#322C2B',
        fontWeight: '900',
        fontSize: 26, // Aumenta el tamaño de la fuente del título
        marginBottom: 20, // Aumenta el espacio debajo del título
    },
    textRegistrar: {
        color: '#322C2B',
        fontWeight: '700',
        fontSize: 24, // Aumenta el tamaño de la fuente de los textos de los botones
    }
});

