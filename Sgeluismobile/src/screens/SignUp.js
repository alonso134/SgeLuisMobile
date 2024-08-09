import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
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

            const response = await fetch(`${ip}/EXPO2024/api/services/admin/profesores.php?action=signUp`, {
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
            {/* Título fijo en la parte superior */}
            <View style={styles.header}>
                <Text style={styles.texto}>Registrar Usuario</Text>
            </View>

            {/* Contenido desplazable */}
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <Input
                    placeHolder='Nombre Profesor'
                    setValor={nombre}
                    setTextChange={setNombre}
                    style={styles.input}
                />
                <Input
                    placeHolder='Apellido Profesor'
                    setValor={apellido}
                    setTextChange={setApellido}
                    style={styles.input}
                />
                <InputEmail
                    placeHolder='Alias Profesor'
                    setValor={alias}
                    setTextChange={setAlias}
                    style={styles.input}
                />
                <InputEmail
                    placeHolder='Correo Profesor'
                    setValor={correo}
                    setTextChange={setCorreo}
                    style={styles.input}
                />
                <Input
                    placeHolder='Clave'
                    contra={true}
                    setValor={clave}
                    setTextChange={setClave}
                    style={styles.input}
                />
                <Input
                    placeHolder='Confirmar Clave'
                    contra={true}
                    setValor={confirmarClave}
                    setTextChange={setConfirmarClave}
                    style={styles.input}
                />

                <Buttons
                    textoBoton='Registrar Usuario'
                    accionBoton={handleCreate}
                    style={styles.button}
                />

                <Buttons
                    textoBoton='Ir al Login'
                    accionBoton={handleLogout}
                    style={styles.button}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778DA9',
        paddingTop: Constants.statusBarHeight + 5,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 20, // Espaciado para el título
        backgroundColor: '#778DA9', // Mismo color de fondo que el resto de la pantalla
    },
    scrollViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50, // Añadido para centrar el contenido verticalmente
    },
    texto: {
        color: '#322C2B',
        fontWeight: '900',
        fontSize: 28, // Aumentado para hacer el título más visible
    },
    input: {
        width: '90%', // Aumentado el ancho de los inputs
        marginBottom: 20,
        paddingVertical: 10, // Añadido para aumentar la altura de los inputs
        paddingHorizontal: 15, // Añadido para mayor espacio en los lados de los inputs
        fontSize: 16, // Aumentado el tamaño del texto de los inputs
    },
    button: {
        width: '90%', // Aumentado el ancho de los botones
        marginVertical: 20, // Aumentado el espacio vertical entre botones
        paddingVertical: 15, // Añadido para aumentar la altura de los botones
        fontSize: 18, // Aumentado el tamaño del texto de los botones
    }
});