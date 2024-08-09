import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = () => {
        if (email === '') {
            Alert.alert('Error', 'Please enter your email address.');
            return;
        }

        // Aquí puedes agregar la lógica para enviar el correo de recuperación
        Alert.alert('Success', 'A recovery email has been sent to ' + email);

        // Lógica adicional para el envío de la solicitud
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Password Recovery</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handlePasswordRecovery}>
                <Text style={styles.buttonText}>Send Recovery Email</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PasswordRecovery;
